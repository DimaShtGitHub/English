'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('GameCards', [{
      topicId: 1,
      wordId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GameCards', null, {});
  }
};
