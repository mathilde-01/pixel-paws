import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_HEALTH_MUTATION = gql`
  mutation UpdateHealth($healthId: ID!, $fun: Int!, $cleanliness: Int!, $hunger: Int!, $sleep: Int!) {
    updateHealth(healthId: $healthId, fun: $fun, cleanliness: $cleanliness, hunger: $hunger, sleep: $sleep) {
      _id
      fun
      cleanliness
      hunger
      sleep
    }
  }
`;

export const ADD_PET = gql`
  mutation AddPet($name: String!, $location: String!, $userId: ID!) {
    addPet(name: $name, location: $location, userId: $userId) {
      name
      location
      user {
        _id
      }
    }
  }
`;

export const UPDATE_PET_MUTATION = gql`
  mutation UpdatePet(
    $petId: ID!
    $last_interaction: String
    $health: HealthInput
  ) {
    updatePet(
      petId: $petId
      last_interaction: $last_interaction
      health: $health
    ) {
      _id
      birthday
      last_interaction
      health {
        _id
        fun
        cleanliness
        hunger
        sleep
      }
    }
  }
`;

export const REMOVE_PET_MUTATION = gql`
  mutation RemovePet($petId: ID!) {
    removePet(petId: $petId) {
      _id
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $password: String!, $confirmPassword: String!) {
    addUser(email: $email, password: $password, confirmPassword: $confirmPassword) {
      token
      user {
        email
      }
    }
  }
`;
