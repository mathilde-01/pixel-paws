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
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      return User.create({ name, email });
    },
    // add pet
    addPet: async (parent, { petInput }) => {
        const pet = new Pet({
          name: petInput.name,
        });
        await pet.save();
        return pet;
      },

    // remove pet
    removePet: async (parent, { petId }) => { 
      return Pet.findOneAndDelete({ _id: petId });
    },

    //update health
    updateHealth: async (
      parent,
      { healthId, fun, cleanliness, hunger, sleep }
    ) => {
      return Health.findByIdAndUpdate(
        { healthId },
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
