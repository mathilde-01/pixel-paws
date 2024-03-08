const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    pets: [Pet]
  }

  type Pet {
    _id: ID
    name: String
    location: Int
    birthday: String
    last_interaction: String
    user: User
  }

  type Health {
    _id: ID
    fun: Float
    cleanliness: Float
    hunger: Float
    sleep: Float
    pet: Pet
  }
  type Query {
    users: [User]
    user(_id: ID!): User
    pets: [Pet]
    pet(_id: ID!): Pet
    health(_id: ID!): Health
  }
  type Mutation {
    addUser(
        name: String!, 
        email: String!
        ): User
    addPet(
        name: String!, 
        location: Int!, 
        userId: ID!
        ): Pet
`;

module.exports = typeDefs;