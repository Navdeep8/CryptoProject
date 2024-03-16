'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tokens.init({
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    decimals: DataTypes.INTEGER,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tokens',
  });
  return Tokens;
};