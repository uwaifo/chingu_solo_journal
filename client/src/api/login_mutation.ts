import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`;

/*
mutation {
  login(input: { email: "gloria@overstandapps.com", password: "password" }) {
    user {
      id
      email
    }
  }
}

*/
