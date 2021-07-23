const { Book } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return Book.find();
    },

    profile: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
  },
}


  module.exports = resolvers;