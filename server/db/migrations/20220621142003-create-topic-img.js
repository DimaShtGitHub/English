'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TopicImgs', {
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
      img: {
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
    await queryInterface.dropTable('TopicImgs');
  }
};
