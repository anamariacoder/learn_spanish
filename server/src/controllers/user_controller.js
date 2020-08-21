const uuid = require("uuid"); 
const { User } = require("../models"); 

const userController = {
  register: async (newUser) => {
    const createdUser = User.create(newUser);
    return createdUser;
  },
};

module.exports = userController;

