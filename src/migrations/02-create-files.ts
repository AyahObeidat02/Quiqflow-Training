import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('files', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'uploaded',
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onDelete: 'CASCADE',
    },
    tenantId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: { model: 'tenants', key: 'id' },
      onDelete: 'CASCADE',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('files');
}
