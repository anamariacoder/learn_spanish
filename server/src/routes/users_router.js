const express = require("express");
require("express-async-errors");
const passport = require("passport");
const userController = require("../controllers/user_controller");
//const authController = require("../controllers/auth_controller");
const usersRouter = express.Router();
const userInfo = null;
console.log("je vais faire login 1");

usersRouter.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('success login : the user is ', req.user)
  });

// usersRouter.post(
//   "/login",

//   (request, response) => {
//     //const userInfo = await authController.login(request.body);     // delete
//     console.log("appel à passport");

//     passport.authenticate("local"),
//       function(req, res) {
//         // If this function gets called, authentication was successful.
//         // `req.user` contains the authenticated user.
//         console.log("success login");

//         userInfo = req.user.username;
//         console.log("success userInfooooo ", userInfo);
//         return userInfo;
//       };
//     // const token = authenticate.generateAuthToken(userInfo);
//     // console.log("userInfo ", userInfo);
//     response
//       .status(200)
//       //   .header("xAuth", token)
//       .json({ userInfo, message: "you are now logged in ! " });
//   }
// );

usersRouter.post("/register", async (request, response) => {
  const data = request.body;
  const createdUser = await userController.register(data);
  console.log("data ", data);
  response
    .status(201)
    .json({ createdUser, message: "account created succesfully! " });
});

module.exports = usersRouter;

// ////usersRouter.get('/login', user_controller.loginForm);
// ////module.exports = usersRouter; //difference

// /********************************************************* */
// // const express = require("express"); **8** 17 juin
// // require("express-async-errors");

// // // // const user_controller = require("../controllers/user_controller");

// // // //const usersRouter = express.Router();
// // const { register } = require("../controllers/user_controller"); /*old*/
// // usersRouter.get("/", async (request, response) => {
// //   const users = await getUsers();
// //   response.status(OK);
// //   response.json(users);

// //   console.log("******** This is the user : ", newUser);
// // });

// // usersRouter.post("/register", async (request, response) => {
// //   const data = request.body;
// //   const newUser = await register(data);
// //   response.status(OK);
// //   response.json(newUser);

// //   console.log("******** This is the user : ", newUser);

// // });

// /********************** (1)   09 juin before new authentication */
// // const express = require("express");
// // require("express-async-errors");

// // const { register } = require("../controllers/user_controller");

// // //const { OK } = require("../helpers/status_code");

// // const usersRouter = express.Router();

// // usersRouter.get("/", async (request, response) => {
// //   const users = await getUsers();
// //   response.status(OK);
// //   response.json(users);

// //   console.log("******** This is the user : ", newUser);
// // });

// // usersRouter.post("/register", async (request, response) => {
// //   const data = request.body;
// //   const newUser = await register(data);
// //   response.status(OK);
// //   response.json(newUser);

// //   console.log("******** This is the user : ", newUser);

// // });

// // module.exports = usersRouter;

//*************************************************** OLD STUFF - AVANT 25 juillet
// const express = require("express");
// require("express-async-errors");
// const passport=require("passport");

// const userController = require("../controllers/user_controller");
// //const authController = require("../controllers/auth_controller");

// const usersRouter = express.Router();
// console.log("je vais faire login 1");

// const userInfo = null;
// //console.log("userInfo = ", userInfo);
// usersRouter.post("/login",  (request, response) => {
//   //const userInfo = await authController.login(request.body);     // delete
//   console.log("appel à passport");

//   passport.authenticate("local"),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     console.log("success login");

//     userInfo = req.user;
//     console.log("success userInfooooo ", userInfo);
//      return userInfo;
//   };
//   // const token = authenticate.generateAuthToken(userInfo);
//   // console.log("userInfo ", userInfo);
//   response
//     .status(200)
//   //   .header("xAuth", token)
//     .json({ userInfo, message: "you are now logged in ! " });
// });

// usersRouter.post("/register", async (request, response) => {
//   const data = request.body;
//   const createdUser = await userController.register(data);
//   console.log("data ", data);
//   response
//     .status(201)
//     .json({ createdUser, message: "account created succesfully! " });
// });

// module.exports = usersRouter;

// // ////usersRouter.get('/login', user_controller.loginForm);
// // ////module.exports = usersRouter; //difference

// /********************************************************* */
// // const express = require("express"); **8** 17 juin
// // require("express-async-errors");

// // // // const user_controller = require("../controllers/user_controller");

// // // //const usersRouter = express.Router();
// // const { register } = require("../controllers/user_controller"); /*old*/
// // usersRouter.get("/", async (request, response) => {
// //   const users = await getUsers();
// //   response.status(OK);
// //   response.json(users);

// //   console.log("******** This is the user : ", newUser);
// // });

// // usersRouter.post("/register", async (request, response) => {
// //   const data = request.body;
// //   const newUser = await register(data);
// //   response.status(OK);
// //   response.json(newUser);

// //   console.log("******** This is the user : ", newUser);

// // });

// /********************** (1)   09 juin before new authentication */
// // const express = require("express");
// // require("express-async-errors");

// // const { register } = require("../controllers/user_controller");

// // //const { OK } = require("../helpers/status_code");

// // const usersRouter = express.Router();

// // usersRouter.get("/", async (request, response) => {
// //   const users = await getUsers();
// //   response.status(OK);
// //   response.json(users);

// //   console.log("******** This is the user : ", newUser);
// // });

// // usersRouter.post("/register", async (request, response) => {
// //   const data = request.body;
// //   const newUser = await register(data);
// //   response.status(OK);
// //   response.json(newUser);

// //   console.log("******** This is the user : ", newUser);

// // });

// // module.exports = usersRouter;
