const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-scratch-o-rama');

module.exports = mongoose.connection;