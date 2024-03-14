import { gql } from "@apollo/client";

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

export const UPDATE_PET_MUTATION = gql`
  mutation UpdatePetOnLoad($petId: ID!) {
    updatePetOnLoad(petId: $petId) {
      _id
      // Include other fields you want to return after updating pet on load
    }
  }
`;

export const DELETE_PET_MUTATION = gql`
  mutation DeletePet($petId: ID!) {
    removePet(petId: $petId) {
      _id
      // Include other fields you want to return after deleting the pet
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignUp($name: String!, $email: String!) {
    signUp(name: $name, email: $email) {
      _id
      email
    }
  }
`;
