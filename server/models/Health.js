const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  fun: {
    type: Number,
    required: true,
    default: 0.4
  },
  cleanliness: {
    type: Number,
    required: true,
    default: 0.2
  },
  hunger: {
    type: Number,
    required: true,
    default: 0.6
  },
  sleep: {
    type: Number,
    required: true,
    default: 0.2
  }
});

const Health = mongoose.model('Health', healthSchema);

module.exports = Health;
