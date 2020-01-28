import { gql } from "apollo-boost";

export const CREATE_JOURNAL = gql`
  mutation createJournal($title: String!, $body: String!) {
    createJournal(options: { title: $title, body: $body }) {
      id
      title
      body
      createdOn
    
    }
  }
`;
export const DELETE_JOURNAL = gql`
mutation deleteJournal($id: String!) {
  deleteJournal(id: $id)
}
`



/*
mutation{
  createJournal(
    options: {
      title:"DEONTAY WILDER GOES THANOS ON FURY",
      body: "FightHype.com was on hand in Los Angeles, California where undefeated heavyweight champions Deontay Wilder and Tyson Fury held the kick-off press conference to officially announce their highly-anticipated February 22 rematch. You don't want to miss what those in attendance had to say. Check it out!"
      }
  ) {
    id
    title
    body
    createdOn
    user{
      id
    }
    
  }
}

*/
