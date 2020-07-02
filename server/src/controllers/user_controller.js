const uuid = require("uuid"); /*old*/
const { User } = require("../models"); /*old*/

const userController = {
  register: async (newUser) => {
    const createdUser = User.create(newUser);
    return createdUser;
  },
};

// 74d04129-b23b-4647-9fde-4c0a304d4587 | kdlk        | jsqkdkj    | dsfs          | aaa             | aaa@gmail.com        | 2020-07-02 18:39:28.072+02 | 2020-07-02 18:39:28.074+02


module.exports = userController;

