const { connection, Note } = require('./db/connection');

const resolvers = {
  Query: {
    notes: async () => {
      await connection;
      return await Note.find({});
    },
  },
};

module.exports = resolvers;
