const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Pet = require('../models/Pet');
const Health = require('../models/Health');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true })
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
        name: 'John Doe',
        email: 'john@example.com',
        password: await bcrypt.hash('password123', 10)
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: await bcrypt.hash('password456', 10)
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
        user_id: users[0]._id
      },
      {
        name: 'Buddy',
        type: 'Dog',
        location: 'Backyard',
        alive: true,
        birthday: new Date(),
        last_interaction: new Date(),
        user_id: users[1]._id
      }
    ]);

    // Seed health
    await Health.create([
      {
        fun: 0.8,
        cleanliness: 0.9,
        hunger: 0.5,
        sleep: 0.7,
        pet_id: pets[0]._id
      },
      {
        fun: 0.7,
        cleanliness: 0.8,
        hunger: 0.6,
        sleep: 0.5,
        pet_id: pets[1]._id
      }
    ]);

    console.log('Seed data successfully.');
    process.exit(0); // Exit after seeding data
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1); // Exit with error
  }
}
