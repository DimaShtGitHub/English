'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Word, {through: 'GameCards', foreignKey: 'topicId'}),
      this.hasOne(models.TopicImg,  {foreignKey: 'topicId' }),
      this.hasMany(models.InsertLetter, { foreignKey: 'topicId' })
    }
  }
  Topic.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
