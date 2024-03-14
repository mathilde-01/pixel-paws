import { gql } from '@apollo/client';

export const QUERY_ALL_PROFILES = gql`
  query allUsers {
    users {
      _id
      name
      email
      pets {
        _id
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

export const ME_QUERY = gql`
  query ME {
    me {
      _id
      email
      pets {
        _id
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
