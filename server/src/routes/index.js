const express = require("express");

const levelTests = require("./levelTests_router");
const levelTestUserSummariesByUser = require("./levelTestUserSummaries_router");
// Should pass the userId to levelTestUserSummariesByUser

// const authRouter = require("./auth_router"); difference
const usersRouter = require("./users_router");

const mainRouter = express.Router();

mainRouter.use("/leveltestusersummary", levelTestUserSummariesByUser); //AJOUTER POUR levelTestUSERSUMMARIES // 11 mai
mainRouter.use("/leveltest", levelTests);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
