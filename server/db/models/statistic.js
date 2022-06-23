'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Word, { foreignKey: 'wordId' })
    }
  }
  Statistic.init({
    userId: DataTypes.INTEGER,
    wordId: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};
