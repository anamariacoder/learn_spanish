const passport = require("passport");

// export const authenticate = (req, res) => ??? J'ai trouvé ça avec l'export clause
// const authenticate = (req, res) =>
//   new Promise((resolve, reject) => {
//     console.log("dans authenticate");
//     passport.authenticate('local', { session: false }, (err, user) => {
//       if (err) reject(new Error(err));
//       else if (!user) reject(new Error("No user found with these credentials"));
//       resolve(user);
//     })(req, res);
//   });

const authController = {
  login: async (req) => {
    console.log("auth_controller + req dans login ", req);
    // const user = await authenticate(req);
    passport.authenticate("local"),
      function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        console.log("success login");
        userInfo = req.user.username;
        return userInfo;
      };
    // console.log("userInfo in login ", userInfo);
    // const userInfo = {
    //   id: user.id,
    //   firstName: user.first_name,
    //   email: user.email,
    // };

    // return userInfo;
  },
};

module.exports = authController;
