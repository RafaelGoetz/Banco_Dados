'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'professor',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        idade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        uf: {
          type: Sequelize.DataTypes.STRING(2),
          allowNull: false,
        },
        pais: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        materia_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'materia', 
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
    await queryInterface.dropTable('professor');
  },
};