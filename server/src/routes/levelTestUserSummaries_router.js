const express = require("express");
require("express-async-errors");

const {
  retrieveLevelTestUserSummariesByUser,
} = require("../controllers/leveltestusersummaries_controller");

const levelTestUserSummariesRouter = express.Router();

levelTestUserSummariesRouter.get("/", async (request, response) => {
  // {idUtilisateur = user.idUser};
  const levelTestUserSummariesByUser = await retrieveLevelTestUserSummariesByUser(); //ICI
  // response.status(OK).json(levelTestUserSummaries);
  response.status(200);
  response.json(levelTestUserSummariesByUser);
});

levelTestUserSummariesRouter.post("/", async (request, response) => {
const data = request.body;
console.log("router data : " , data);
  const levelTestUserSummariesByUser = await retrieveLevelTestUserSummariesByUser(data);
  // response.status(OK).json(levelTestUserSummaries);
  response.status(200);
  response.json(levelTestUserSummariesByUser);
});

module.exports = levelTestUserSummariesRouter;

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
