'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'materia',
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
    await queryInterface.dropTable('materia');
  },
};
