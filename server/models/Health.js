const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  fun: {
    type: Number,
    required: true,
    default: 1
  },
  cleanliness: {
    type: Number,
    required: true,
    default: 1
  },
  hunger: {
    type: Number,
    required: true,
    default: 1
  },
  sleep: {
    type: Number,
    required: true,
    default: 1
  }
});

const Health = mongoose.model('Health', healthSchema);

module.exports = Health;
