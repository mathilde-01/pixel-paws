const typeDefs = `
  type User {
    _id: ID
    email: String
    pets: [Pet]
  }

  type Pet {
    _id: ID
    name: String
    type: String
    location: String
    alive: Boolean
    birthday: String
    last_interaction: String
    user: User
    health: Health
  }

  type Health {
    _id: ID
    fun: Float
    cleanliness: Float
    hunger: Float
    sleep: Float
  }
  
  type Query {
    users: [User]
    user(_id: ID!): User
    allPets: [Pet]
    petById(_id: ID!): Pet
    health(_id: ID!): Health
  }
  
  type Mutation {
    addUser(email: String!, password: String!, confirmPassword: String!): User
    addPet(name: String!, location: String!, userId: ID!): Pet
    removePet(petId: ID!): Pet
    updateHealth(
      healthId: ID!
      fun: Float
      cleanliness: Float
      hunger: Float
      sleep: Float
    ): Health
  }
`;

module.exports = typeDefs;
