const express = require("express");
require("express-async-errors");


levelTestUserSummariesRouter.get("/", async (request, response) => {
  const levelTestUserSummaries = await levelTestUserSummariesController.getAllLevelTestUserSummaries();
  response.status(OK).json(levelTestUserSummaries);
  // response.status(200);
  // response.json(levelTestUserSummaries);
});

module.exports = levelTestsUserSummariesRouter;






//********************************************************* */
// const express = require("express");
// require("express-async-errors");

// const {
//   retrieveLevelTestUserSummary
// } = require("../controllers/leveltestusersummaries_controller");

// const levelTestUserSummariesRouter = express.Router();

// levelTestUserSummariesRouter.get("/", async (request, response) => {
//   const levelTestUserSummaries = await retrieveLevelTestUserSummaries();

//   response.status(200);
//   response.json(levelTestUserSummaries);
// });

// module.exports = levelTestsUserSummariesRouter;
