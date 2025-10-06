import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  is_active: boolean;
  tenantId: number;
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'created_at' | 'updated_at'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password_hash!: string;
  public is_active!: boolean;
  public tenantId!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  static initialize(sequelize: Sequelize) {
    User.init(
      {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password_hash: { type: DataTypes.STRING, allowNull: false },
        is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
        tenantId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      },
      { tableName: 'users', sequelize, timestamps: false }
    );
  }

  static associate(models: any) {
    User.hasMany(models.File, { foreignKey: 'userId' });
    User.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
  }
}
