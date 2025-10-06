import { Model, DataTypes, Sequelize, Optional } from 'sequelize';
import { User } from './user.model';
import { Tenant } from './tenant.model';

interface FileAttributes {
  id: number;
  filename: string;
  status: string;
  userId: number;
  tenantId: number;
  created_at?: Date;
  updated_at?: Date;
}

interface FileCreationAttributes extends Optional<FileAttributes, 'id' | 'created_at' | 'updated_at'> {}

export class File extends Model<FileAttributes, FileCreationAttributes> implements FileAttributes {
  public id!: number;
  public filename!: string;
  public status!: string;
  public userId!: number;
  public tenantId!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  static initialize(sequelize: Sequelize) {
    File.init(
      {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        filename: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'uploaded' },
        userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
        tenantId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      },
      { tableName: 'files', sequelize, timestamps: false }
    );
  }

  static associate(models: any) {
    File.belongsTo(models.User, { foreignKey: 'userId' });
    File.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
  }
}
