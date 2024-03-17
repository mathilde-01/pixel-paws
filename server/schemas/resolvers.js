const { HealthModel, PetModel, UserModel } = require("../models");
const updateHealthData = require("../util/heathLogic");
const { signToken, AuthenticationError } = require('../util/auth');

const resolvers = {
  Query: {
    // finds all pets
    allPets: async () => {
      const pets = await PetModel.find().populate("health").populate("user");
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
      const user = await UserModel.findOne({ _id: id }).populate({ path: 'pets', populate: { path: 'health', model: 'Health' } })
      if (user.pet && user.pet.health) {
        updateHealthData(user.pet.id, user.pet)
      }
      return user
    },
    health: async (parent, {}) => {
      return HealthModel.find();
    },
    users: async () => {
      const users = await UserModel.find().populate({ path: 'pets', populate: { path: 'health', model: 'Health' } });
      return users;
    }
  },

  Mutation: {
    //need login and signup resolvers
    login: async (parent, { email, password }) => {
      const user = await UserModel.findOne({ email });

      if (!user) {
        console.log("could not find user")
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        console.log("incorrect password")
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    // need to complete add user
    addUser: async (parent, { email, password }) => {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      const user = await UserModel.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    // add pet
    addPet: async (parent, { name, location, userId }) => {

        // Retrieve the user by the provided userId
        const user = await UserModel.findById(userId);
        if (!user) {
          throw new Error('User not found');
        }

        const pet = new PetModel({
          name,
          location,
          user: user
        });

        const health = new HealthModel();
        pet.health = health._id;

        user.pets.push(pet._id);

        await health.save();
        await user.save();
        await pet.save();
        
        return pet;
      },

    // remove pet
    removePet: async (parent, { petId }) => {
      const deletedPet = await PetModel.findOneAndDelete({ _id: petId }); 
      return deletedPet;
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
    updatePet: async (parent, { petId, ...updateData }, context, info) => {
      try {
        const updatedPet = await Pet.findByIdAndUpdate(
          petId,
          { $set: updateData },
          { new: true, runValidators: true }
        );

        if (!updatedPet) {
          throw new Error('Pet not found');
        }

        return updatedPet;
      } catch (error) {
        throw new Error(`Failed to update pet: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
