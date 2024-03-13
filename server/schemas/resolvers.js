const { HealthModel, PetModel, UserModel } = require("../models");

const resolvers = {
  Query: {
    // finds all pets
    pets: async () => {
      return PetModel.find();
    },
    // find pet by id
    pet: async (parent, id ) => {
      console.log(id);
      return PetModel.findOne({ _id: id }).populate("health").populate("user");
      //return PetModel.findOne({ _id: id }).populate("health");
    },
    // finds user
    user: async (parent, id ) => {
      return UserModel.findOne({ _id: id })
      //return UserModel.findOne({ _id: id }).populate("pets");
    },
    health: async (parent, {}) => {
      return HealthModel.find();
    }
  },

  Mutation: {
    // add user
    addUser: async (parent, { name, email }) => {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      return UserModel.create({ name, email });
    },
    // add pet
    addPet: async (parent, { petInput }) => {
        const pet = new PetModel({
          name: petInput.name,
        });
        await pet.save();
        return pet;
      },

    // remove pet
    removePet: async (parent, { petId }) => { 
      return PetModel.findOneAndDelete({ _id: petId });
    },

    //update health
    updateHealth: async (
      parent,
      { healthId, fun, cleanliness, hunger, sleep }
    ) => {
      return HealthModel.findByIdAndUpdate(
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
