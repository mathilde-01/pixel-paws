const { User, Pet, Health } = require('../models');

function storeUser(dataToStore, callback) {
  const newUser = new User(dataToStore);
  newUser.save()
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      console.error(error);
      callback(error, null);
    });
}

function storePet(dataToStore, callback) {
  const newPet = new Pet(dataToStore);
  newPet.save()
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      console.error(error);
      callback(error, null);
    });
}

function storeHealth(dataToStore, callback) {
  const newHealth = new Health(dataToStore);
  newHealth.save()
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      console.error(error);
      callback(error, null);
    });
}

module.exports = {
  storeUser,
  storePet,
  storeHealth
};
