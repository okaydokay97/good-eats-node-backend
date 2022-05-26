'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    cuisine: DataTypes.ARRAY(DataTypes.STRING),
    menu: DataTypes.JSON,
    address: DataTypes.STRING,
    deliver: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'restaurants',
    modelName: 'Restaurant',
  });
  return Restaurant;
};