const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model { }

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER, // Might want to store as string instead
      allowNull: false,
    },
    location: {
      type: DataTypes.INTEGER, // Might want to store as string instead
      allowNull: false,
    },
    alive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW // Sets the default value to the current timestamp
    },
    last_interaction: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW // Set default value to current timestamp
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    health_id: {
      type: DataTypes.INTEGER,
      references: { 
        model: 'health',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Pet',
  }
);


module.exports = Pet;

