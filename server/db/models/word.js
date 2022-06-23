'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    
    static associate(models) {
      // define association here
      this.belongsToMany(models.Topic, {through: 'GameCards', foreignKey: 'wordId'}),
      this.hasMany(models.InsertLetter,  { foreignKey: 'wordId'}),
      this.hasOne(models.Statistic,  { foreignKey: 'wordId'})
    }
  }
  Word.init({
    wordEnglish: DataTypes.STRING,
    img: DataTypes.STRING,
    wordRussian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
