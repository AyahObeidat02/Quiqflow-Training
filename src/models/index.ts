import { Sequelize } from 'sequelize';
import config from '../config/database';
import { User } from './user.model';
import { File } from './file.model';
import { Tenant } from './tenant.model';

const env = (process.env.NODE_ENV || 'development') as keyof typeof config;
const dbConfig = config[env];

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: console.log,
});

type ModelClass = { 
  initialize: (sequelize: Sequelize) => void;
  associate?: (models: any) => void;
};

const models: Record<string, ModelClass> = { User, File, Tenant };

// Initialize models
Object.values(models).forEach(model => model.initialize(sequelize));

// Setup associations
Object.values(models).forEach(model => model.associate && model.associate(models));