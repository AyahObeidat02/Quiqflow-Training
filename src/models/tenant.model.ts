import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface TenantAttributes {
  id: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

interface TenantCreationAttributes extends Optional<TenantAttributes, 'id' | 'created_at' | 'updated_at'> {}

export class Tenant extends Model<TenantAttributes, TenantCreationAttributes> implements TenantAttributes {
  public id!: number;
  public name!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  static initialize(sequelize: Sequelize) {
    Tenant.init(
      {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      },
      { tableName: 'tenants', sequelize, timestamps: false }
    );
  }

  static associate(models: any) {
    Tenant.hasMany(models.User, { foreignKey: 'tenantId' });
    Tenant.hasMany(models.File, { foreignKey: 'tenantId' });
  }
}
