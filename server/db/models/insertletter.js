'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsertLetter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Topic, { foreignKey: 'topicId' }),
      this.belongsTo(models.Word, { foreignKey: 'wordId' })
    }
  }
  InsertLetter.init({
    topicId: DataTypes.INTEGER,
    wordId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    letter: DataTypes.STRING,
    option:  DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InsertLetter',
  });
  return InsertLetter;
};
