const { Health, Pet, User } = require("..models");

const resolvers = {
  Query: {
    // finds all pets
    pets: async () => {
      return Pet.find();
    },
    // find pet by id
    pet: async (parent, { ID }) => {
      return Pet.findOne({ _id: ID }).populate("user");
    },
    // finds user
    users: async (parent, {}) => {
      return User.find().populate("pets");
    },
  },

  Mutation: {
    // add user
    addUser: async (parent, { name, email }) => {
      return User.User.create({ name, email });
    },
    // remove pet
    removePet: async (parent, { PetId }) => {
      return Pet.findOneAndDelete({ _id: PetId });
    },

    //update health
    updateHealth: async (
      parent,
      { healthId, fun, cleanliness, hunger, sleep }
    ) => {
      return Health.findOneAndUpdate(
        { _id: healthId },
        {
          $set: { fun, cleanliness, hunger, sleep },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
