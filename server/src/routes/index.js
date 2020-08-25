const express = require("express");

const levelTests = require("./levelTests_router");
const levelTestUserSummariesByUser = require("./levelTestUserSummaries_router");
const usersRouter = require("./users_router");

const mainRouter = express.Router();

mainRouter.use("/leveltestusersummary", levelTestUserSummariesByUser); 
mainRouter.use("/leveltest", levelTests);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
