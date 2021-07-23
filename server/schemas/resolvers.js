const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');



const resolvers = {
  Query: {
    me: async () => {
      return User.find();
    },

    book: async () => {
      return Book.findOne() ;
    },
  },
}


  module.exports = resolvers;