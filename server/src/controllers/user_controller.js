const uuid = require("uuid"); /*old*/
const { User } = require("../models"); /*old*/

const userController = {
  register: async (newUser) => {
    const createdUser = User.create(newUser);
    return createdUser;
  },
};

module.exports = userController;

