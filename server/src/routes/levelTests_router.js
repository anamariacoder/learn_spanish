const express = require("express");
require("express-async-errors");
//
const { retrieveLevelTest } = require("../controllers/leveltests_controller");

// const { OK } = require("../helpers/status_code");

const levelTestsRouter = express.Router();

levelTestsRouter.get("/", async (request, response) => {
  const levelTests = await retrieveLevelTest();
 
  response.status(200);
  response.json(levelTests);
});

module.exports = levelTestsRouter;
