'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('school')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('school'
    )
  }
};
