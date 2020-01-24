import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

//import { HttpLink } from "apollo-link-http";
//import { InMemoryCache } from "apollo-cache-inmemory";


import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import { } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import { graphql } from "graphql";




ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
