const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  fun: {
    type: Number,
    required: true
  },
  cleanliness: {
    type: Number,
    required: true
  },
  hunger: {
    type: Number,
    required: true
  },
  sleep: {
    type: Number,
    required: true
  }
});

const Health = mongoose.model('Health', healthSchema);

module.exports = Health;
