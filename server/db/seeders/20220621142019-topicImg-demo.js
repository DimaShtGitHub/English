'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TopicImgs', [{
      topicId: 1,
      img: '/img/Cheese.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      img: '/img/Fox.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      img: '/img/Three.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      img: '/img/Orange.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      img: '/img/Cucumber.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      img: '/img/Train.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      img: '/img/Home.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TopicImgs', null, {});
  }
};
