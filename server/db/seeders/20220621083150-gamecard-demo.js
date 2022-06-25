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
      topicId: 3,
      wordId: 47,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 32,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 33,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 42,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 46,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 71,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 48,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 49,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 73,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 74,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 85,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 34,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 36,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 65,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 81,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 80,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 78,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 77,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 93,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 94,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 63,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 43,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 51,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 52,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 54,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 56,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      topicId: 4,
      wordId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 82,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 61,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 37,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 62,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      topicId: 7,
      wordId: 64,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 67,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 84,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 91,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 92,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GameCards', null, {});
  }
};

