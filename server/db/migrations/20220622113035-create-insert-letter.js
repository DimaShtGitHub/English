'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InsertLetters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topicId: {
        type: Sequelize.INTEGER,
        references: {key: 'id', model: 'Topics'}
      },
      wordId: {
        type: Sequelize.INTEGER,
        references: {key: 'id', model: 'Words'}
      },
      text: {
        type: Sequelize.STRING
      },
      letter: {
        type: Sequelize.STRING
      },
      option: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InsertLetters');
  }
};
