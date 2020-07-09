const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authenticate = {

  // attachCurrentUser: async (request, response, next) => {
  //   const { id } = request.user;
  //   const user = await User.findByPk(id, {
  //     attributes: ["id", "firstName", "lastName", "email"],
  //     raw: true
  //   });
  //   request.currentUser = user;
  //   if (!user) response.status(401).end("User not found");
  //   else return next();
  // }
};

module.exports = authenticate;
