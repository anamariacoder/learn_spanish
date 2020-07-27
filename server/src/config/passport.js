const passport = require("passport");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const LocalStrategy = require("passport-local").Strategy;

const { User } = require("../models");
console.log("Avant l'appel à passport");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function(username, password, done) {
      User.findOne(
        {
          where: {
            email: {
              [Op.eq]: username,
            },
          },
          attributes: ["id", "first_name", "last_name", "password", "email"],
          raw: true,
        },
        function(err, user) {   //problème à partir d'ici (callback function)
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          bcrypt.compare(password, user.password, function(err, res) {
            if (res) {
              done(null, user);
            } else {
              done(null, false, { message: "Incorrect password." });
            }
          });
          return done(null, user);
        }
      );
    }
  )
);

// passport.use(
//   new LocalStrategy(
//     {
//     usernameField: "email",
//     passwordField: "password"
//   },
//   function(username, password, done) {
//     User.findOne({    //get user by email
//         where: {
//           email: {
//             [Op.eq]: username,

//                     },
//         },
//             attributes: ["id", "first_name", "last_name", "password", "email"],
//         raw: true,
//          username= email

//       }),
//       function(err, user)   {

//           if (err) { return done(err); }
//           if (!user) {console.log("req.user " ,req.user);
//           return done(null, false, { message: 'Incorrect username.' });
//           }
//           bcrypt.compare(password, user.password, function(err, res) {
//             if(res) {
//               done(null, { id: user.id, username: user.email})
//              } else {
//             done(null, false)
//              }
//            })

//          if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//           }
//           return done(null, user);
//         }
//   })
// );

// passport.use(         //
//   new LocalStrategy( //
//     {
//       usernameField: "email", //
//       passwordField: "password", // ??
//     },
//     async (username, password, done) => { //
//       let user;
//       try {
//         user = await User.findOne({    //get user by email
//           where: {
//             email: {
//               [Op.eq]: username,
//             },
//           },
//           attributes: ["id", "first_name", "last_name", "password", "email"],
//           raw: true,
//         });
//         if (!user) { // We cannot find the user, par exemple, the case not user with that email
//           return done(null, false, { message: "No user with that email" });
//         }          //there is no error on the server
//       } catch (e) {
//         return done(e);
//       }
//       const match = await bcrypt.compare(password, user.password);
//       if (!match) {
//         return done(null, false, { message: "Incorrect password." });//The user's password does not match
//       }
//       return done(null, user); // We found the authenticated user
//     }
//   )
// );

passport.serializeUser((user, done) => {
  // serialize our user to store inside of the session
  console.log("serialize ");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = User.findByPk(id, {
    attributes: ["id", "first_name", "last_name", "email"], //??????? 20 juillet. Deserialize our user as a single id
    raw: true,
  });
  if (!user) {
    console.log("!user dans deserializeUser  ");
    return done(new Error("User not found"));
  }
  done(null, user);
});
