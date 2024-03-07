const { User, Pet, Health } = require('./models');

function storeUser(dataToStore, callback) {
  User.create(dataToStore)
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      console.error(error);
      callback(error, null);
    });
}

function storePet(dataToStore, callback) {
  Pet.create(dataToStore)
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      console.error(error);
      callback(error, null);
    });
}

function storeHealth(dataToStore, callback) {
  Health.create(dataToStore)
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
