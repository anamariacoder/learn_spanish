const express = require("express");
require("express-async-errors");

const user_controller = require("../controllers/user_controller");

const usersRouter = express.Router();

usersRouter.post("/login", async (request, response) => {
   const userInfo = await authController.login(request);
  // const token = authenticate.generateAuthToken(userInfo);

  response
    .status(200)
    .header("xAuth", token)
    .json({ userInfo, message: "you are now logged in ! " });
});

module.exports = usersRouter;

// ////usersRouter.get('/login', user_controller.loginForm);
// ////module.exports = usersRouter; //difference


/********************************************************* */
// const express = require("express"); **8** 17 juin
// require("express-async-errors");

// // // const user_controller = require("../controllers/user_controller");

// // //const usersRouter = express.Router();
// const { register } = require("../controllers/user_controller"); /*old*/
// usersRouter.get("/", async (request, response) => {
//   const users = await getUsers();
//   response.status(OK);
//   response.json(users);

//   console.log("******** This is the user : ", newUser);
// });

// usersRouter.post("/register", async (request, response) => {
//   const data = request.body;
//   const newUser = await register(data);
//   response.status(OK);
//   response.json(newUser);

//   console.log("******** This is the user : ", newUser);

// });



/********************** (1)   09 juin before new authentication */
// const express = require("express");
// require("express-async-errors");

// const { register } = require("../controllers/user_controller");

// //const { OK } = require("../helpers/status_code");

// const usersRouter = express.Router();

// usersRouter.get("/", async (request, response) => {
//   const users = await getUsers();
//   response.status(OK);
//   response.json(users);

//   console.log("******** This is the user : ", newUser);
// });

// usersRouter.post("/register", async (request, response) => {
//   const data = request.body;
//   const newUser = await register(data);
//   response.status(OK);
//   response.json(newUser);

//   console.log("******** This is the user : ", newUser);

// });

// module.exports = usersRouter;
