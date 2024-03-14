const { HealthModel, PetModel, UserModel } = require("../models");
const updateHealthData = require("../util/heathLogic");

const resolvers = {
  Query: {
    // finds all pets
    allPets: async () => {
      const pets = await PetModel.find().populate("health");
      // for (pet_id in pets) {
      //   pet = pets[pet_id];
      //   if (pet && pet.health) {
      //     updateHealthData(pet_id,pet)
      //   }
      // }
      return pets
    },
    // find pet by id
    petById: async (parent, id ) => {
      const pet = await PetModel.findOne({ _id: id }).populate("health").populate("user");
      if (pet && pet.health) {
        updateHealthData(id, pet)
      }
      return pet
    },
    // finds user
    user: async (parent, id ) => {
      return UserModel.findOne({ _id: id })
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
