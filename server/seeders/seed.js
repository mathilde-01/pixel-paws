const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Pet = require('../models/Pet');
const Health = require('../models/Health');

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/pixels-paws', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Seed data
    seedData();
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Seed function
async function seedData() {
  try {
    // Seed users
    const users = await User.create([
      {
        email: 'john@example.com',
        password: await bcrypt.hash('password123', 10)
      },
      {
        email: 'jane@example.com',
        password: await bcrypt.hash('password456', 10)
      }
    ]);

    // Seed health
    const health = await Health.create([
      {
        fun: 0.8,
        cleanliness: 0.9,
        hunger: 0.5,
        sleep: 0.7,
      },
      {
        fun: 0.7,
        cleanliness: 0.8,
        hunger: 0.6,
        sleep: 0.5,
      }
    ]);
    
    // Seed pets
    const pets = await Pet.create([
      {
        name: 'Fluffy',
        type: 'Cat',
        location: 'Living Room',
        alive: true,
        birthday: new Date(),
        last_interaction: new Date(),
        user: users[0]._id,
        health: health[0]._id

      },
      {
        name: 'Buddy',
        type: 'Dog',
        location: 'Backyard',
        alive: true,
        birthday: new Date(),
        last_interaction: new Date(),
        user: users[1]._id,
        health: health[0]._id
      }
    ]);


    console.log('Seed data successfully.');
    process.exit(0); // Exit after seeding data
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1); // Exit with error
  }
}
