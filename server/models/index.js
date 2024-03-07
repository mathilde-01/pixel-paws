const User = require('./User');
const Pet = require('./Pet');
const Health = require('./Health');

// Define associations
User.hasMany(Pet, {
  foreignKey: 'user_id',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

Pet.hasOne(Health, {
  foreignKey: 'pet_id',
});

Health.belongsTo(Pet, {
  foreignKey: 'pet_id',
});

module.exports = { User, Pet, Health };
