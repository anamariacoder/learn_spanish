const express = require("express");
require("express-async-errors");

const { register } = require("../controllers/user_controller");

//const { OK } = require("../helpers/status_code");

const usersRouter = express.Router();

usersRouter.get("/", async (request, response) => {
  const users = await getUsers();
  response.status(OK);
  response.json(users);
});

usersRouter.post("/register", async (request, response) => {
  const data = request.body;
  const newUser = await register(data);

  response.status(OK);
  response.json(newUser);
});

module.exports = usersRouter;
