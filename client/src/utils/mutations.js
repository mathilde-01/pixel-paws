import { gql } from "@apollo/client";

// update health

// update pet on load

// delete pet

// signup

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