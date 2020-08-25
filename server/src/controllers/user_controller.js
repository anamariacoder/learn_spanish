const uuid = require("uuid"); 
const { User } = require("../models"); 

const userController = {
  register: async (newUser) => {
    const createdUser = User.create(newUser);
    return createdUser;
  },
  deleteUser: async (idToDelete) => {
    const numOfRowsAffected = await User.destroy({
      where: {
        id: idToDelete
      }
    });
    return numOfRowsAffected;
  }
};

module.exports = userController;

