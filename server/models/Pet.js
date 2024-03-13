const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  alive: {
    type: Boolean,
    required: true
  },
  birthday: {
    type: Date,
    required: true,
    default: Date.now // Sets the default value to the current timestamp
  },
  last_interaction: {
    type: Date,
    required: true,
    default: Date.now // Sets the default value to the current timestamp
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  health: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Health'
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
