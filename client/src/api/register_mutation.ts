import { gql } from "apollo-boost";

export const REGISTER_USER = gql`
mutation register(
    $email: String!
    $confirmpassword:String!
) {
    register(
        input: {
            email:$email
            password:$confirmpassword
        }
    ) {
        user {
            id
            email
          }
          errors {
            path
            message
          }
    }
}

`