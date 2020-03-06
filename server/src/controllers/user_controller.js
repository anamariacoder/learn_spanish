const uuid = require("uuid");
const { User } = require("../models");

const usersController = {
//  getUsers: async () => {
/*    const users = await User.findAll({
      order: [["last_name", "ASC"]],
      attributes: [
        "id",
        "account",
        "first_name",
        "last_name",
        "password",
        "email",
        "created_at",
        "updated_at
      ],
      raw: true
    });
    return users;
  },
*/
  register: async (data) => {
    console.log(data);
    if (data.password === data.password_confirm) {
      const newUser = { id: uuid(), ...data };
      const createdUser = await User.create(newUser);
      return createdUser;
    } else {
      console.log("mauvais mdp");
      // res.status(200).json({ error: "wrong password" });
    }
  }
};

module.exports = usersController;

