const express = require("express");
require("express-async-errors");

// const { register } = require("../controllers/user_controller"); /*old*/
const user_controller = require("../controllers/user_controller");


const usersRouter = express.Router();

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


usersRouter.get('/login', user_controller.loginForm);
module.exports = usersRouter;




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
