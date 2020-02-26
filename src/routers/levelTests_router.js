const express = require("express");
require("express-async-errors");

const {
  retrieveTheLevelTests
} = require("../controllers/levelTests_controller");

const { OK } = require("../helpers/status_code");

const levelTestsRouter = express.Router();

levelTestsRouter.get("/", async (request, response) => {
  const levelTests = await retrieveTheLevelTests();

  response.status(OK);
  response.json(levelTests);
});

module.exports = levelTestsRouter;
