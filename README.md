 
# This is a simple Journal application built using node.js.Its a two-tier application composed of the following .

# 1. Client application in the "client" folder is bootstrapped with "create-react-app" with typescript .
The react app serves as a web client for our backend graphql service . Features and dependencies include:
    Client side validation
    react-bootstrap theming
    ApolloClient from apollo-boost
    react-router-dom

# 2. Server app is in the "server" folder .The server was bootstraped using "npx create-graphql-api server --auth" to create the skeletons of a typescript based graphql server. The additional "--auth" flagg adds session based authentication using the packege "express-session"
I decided t keep the deployment simple by using Sqlite for the database. Typeorm is used to communicate with the database and has native support for typescript.

 