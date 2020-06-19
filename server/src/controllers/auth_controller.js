
//** 10 * 17 juin/
// const { authenticate } = require("../models"); // On a besoin de ce la
const authenticate = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate("local", { session: false }, (err, user) => {
      if (err) reject(new Error(err));
      else if (!user) reject(new Error("No user found with these credentials"));
      resolve(user);
    })(req, res);
  });


const authController = {
  login: async req => {
    const user = await authenticate(req);
    const userInfo = {
      id: user.id,
      firstName: user.first_name,
      email: user.email
    };

    return userInfo;
  },
};

  module.exports = authController;