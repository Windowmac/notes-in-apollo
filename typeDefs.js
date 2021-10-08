const { gql } = require('apollo-server');

const typeDefs = gql`
  type Note {
    title: String
    body: String
  }

  type Query {
    notes: [Note]
    note: Note
  }
`;

module.exports = typeDefs;