const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Health extends Model { }

Health.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fun: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cleanliness: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    hunger: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sleep: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pet',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Health',
  }
);

module.exports = Health;
