'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'turma_professor',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        turma_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'turma', 
            key: 'id',
          }
        },
        professor_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'professor', 
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
    await queryInterface.dropTable('turma_professor');
  },
};

