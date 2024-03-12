// seed.js
const fs = require('fs');
const { User, Pet, Health } = require('../models');
const sequelize = require('../config/connection');

// Function to read JSON data from a file
const readJsonFile = (filePath) => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Function to seed users
const seedUsers = async () => {
  const userData = readJsonFile('users.json');
  await User.bulkCreate(userData);
};

// Function to seed pets
const seedPets = async () => {
  const petData = readJsonFile('pets.json');
  await Pet.bulkCreate(petData);
};

// Function to seed health records
const seedHealth = async () => {
  const healthData = readJsonFile('health.json');
  await Health.bulkCreate(healthData);
};

// Main function to seed the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await seedUsers();
    await seedPets();
    await seedHealth();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }

  process.exit(0);
};

seedDatabase();
