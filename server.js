const { ApolloServer } = require('apollo-server');
const { connection } = require('./db/connection');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({ typeDefs, resolvers });

const app = async () => {
    await connection;
    server.listen().then(({ url }) => {
        console.log('you are listening on ', url);
    });
}

app();