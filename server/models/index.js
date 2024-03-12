const User = require('./User');
const Pet = require('./Pet');
const Health = require('./Health');

// Define associations using Mongoose schema references
Pet.schema.add({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

Health.schema.add({
  pet_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }
});

const UserModel = mongoose.model('User', User.schema);
const PetModel = mongoose.model('Pet', Pet.schema);
const HealthModel = mongoose.model('Health', Health.schema);

module.exports = { UserModel, PetModel, HealthModel };
