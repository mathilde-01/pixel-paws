const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const db = require('./config/connection');

const models = require('./models');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 4001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
    await server.start();
  
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
      
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }
    
    app.use('/graphql', expressMiddleware(server));
  
    app.get("/", (req, res) => {
      res.send("Working");
    });
  
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port http://localhost:${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  
  };
  
  startApolloServer();
  