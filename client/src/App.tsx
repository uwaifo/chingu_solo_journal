import React from "react";
import { Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderSection from "./componants/Site/Header";
 import { Journals } from "./componants/Journal/Journals";
 
const client = new ApolloClient({
  //uri: "http://localhost:4000/graphql"
  uri: "http://boiling-stream-06582.herokuapp.com/graphql"
});
/*
client.query({
  query:gql`
  {
    journals {
      id
      title
      body
      createdOn
     }
  }
  `
}).then(result => console.log(result))
*/

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={Journals} />
         </Switch>
    </ApolloProvider>
  );
};

export default App;
