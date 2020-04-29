const express = require("express");

const levelTests = require("./levelTests_router");

//1 27-04-2020
const levelTestUserSummaries = require("./levelTestUserSummaries_router");

const authRouter = require("./auth_router");
const usersRouter = require("./users_router");

const mainRouter = express.Router();

mainRouter.use("/leveltest", levelTests);

// mainRouter.use("/", authRouter);

mainRouter.use("/users", usersRouter);
//?????index va use("/prefix", levelTests_router)
//mainRouter.use("/leveltestusersummary", levelTestUserSummaries);  AJOUTER POUR levelTestUSERSUMMARIES

module.exports = mainRouter;
