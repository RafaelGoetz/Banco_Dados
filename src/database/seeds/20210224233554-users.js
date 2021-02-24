'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      [
        {
          name: 'Fulano',
          email: 'fulano@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name:'Beltrano',
          email: 'beltrano@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      {
        tableName: 'user',
        schema: 'sequelize',
      },
      null,
      {}
    );
  }
};
