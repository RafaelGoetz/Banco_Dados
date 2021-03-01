'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'aluno_telefone',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        numero: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        aluno_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'aluno', 
            key: 'id',
          }
        },
        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'aluno_telefone_tipo', 
            key: 'id',
          }
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: new Date(),
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: new Date(),
          allowNull: false,
        },
      },
      {
        schema: 'school',
      }
    );
  },
  down: async queryInterface => {
    await queryInterface.dropTable('aluno_telefone');
  },
};