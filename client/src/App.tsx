import React from "react";
import { Switch, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { HeaderSection } from "./componants/Header";
import { JournalEntry } from "./componants/JournalEntry";
import { Journals } from "./componants/Journals";
import { LoginForm } from "./componants/LoginForm";
import { RegisterForm } from "./componants/RegisterForm";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
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
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </Switch>
    </ApolloProvider>
    
  );
};

export default App;
