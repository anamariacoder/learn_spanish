const express = require("express");

const levelTests = require("./levelTests_router")

const mainRouter = express.Router();

mainRouter.use("/leveltest", levelTests);

//?????index va use("/prefix", levelTests_router)


module.exports = mainRouter;