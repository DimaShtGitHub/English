'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('InsertLetters', [{
      topicId: 1,
      wordId: 1,
      text: 'Or_nge',
      letter: 'a',
      option: 'aoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 3,
      text: 'Ban_na',
      letter: 'a',
      option: 'aoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 5,
      text: 'Chees_',
      letter: 'e',
      option: 'yoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 7,
      text: 'Hamb_rger',
      letter: 'u',
      option: 'uoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },



    {
      topicId: 2,
      wordId: 4,
      text: 'F_sh',
      letter: 'i',
      option: 'aie',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 21,
      text: 'F_x',
      letter: 'o',
      option: 'oae',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 22,
      text: 'Ra_bit',
      letter: 'b',
      option: 'bcd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 23,
      text: 'D_g',
      letter: 'o',
      option: 'ouy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InsertLetters', null, {});

  }
};
