import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query USER($id: ID!) {
    user(_id: $id) {
      email
      pets {
        _id
        type
        name
        location
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
  }
`;
