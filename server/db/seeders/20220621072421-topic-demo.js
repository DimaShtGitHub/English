'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [{
      title: 'Food',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Animals',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Number',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fruits',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Vegetables',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Transport',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Home',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
