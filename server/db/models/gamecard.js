'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameCard extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  GameCard.init({
    topicId: DataTypes.INTEGER,
    wordId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameCard',
  });
  return GameCard;
};
