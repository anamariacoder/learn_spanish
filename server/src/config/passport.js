const passport = require("passport");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const LocalStrategy = require("passport-local").Strategy;

const { User } = require("../models");
console.log("passport ");
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, password, done) => {
      let user;
      try {
        user = await User.findOne({
          where: {
            email: {
              [Op.eq]: username,
            },
          },
          attributes: ["id", "first_name", "last_name", "password", "email"],
          raw: true,
        });
        if (!user) { // We cannot find the user, par exemple, the case not user with that email
          return done(null, false, { message: "Incorrect username." });
        }
      } catch (e) {
        return done(e);
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serialize ");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {   //??????? juillet
  const user = User.findByPk(id, {
    attributes: ["id", "firstName", "lastName", "email"],
    raw: true,
  });
  if (!user) {
    console.log("!user dans deserializeUser  ");
    return done(new Error("User not found"));
  }
  done(null, user);
});
