'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      email:'foo@bar.com',
      name: 'Rubens Fernandes',
      password: 'Laptop123',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
