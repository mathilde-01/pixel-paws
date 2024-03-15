const { HealthModel, PetModel, UserModel } = require("../models");
const updateHealthData = require("../util/heathLogic");

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

    // need to complete add user
    addUser: async (parent, { email }) => {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      return UserModel.create({ email });
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
  },
};

module.exports = resolvers;
