const express = require("express");
require("express-async-errors");

const {
  retrieveLevelTestUserSummary
} = require("../controllers/leveltestusersummaries_controller");

// const { OK } = require("../helpers/status_code");

const levelTestUserSummariesRouter = express.Router();

levelTestUserSummariesRouter.get("/", async (request, response) => {
  const levelTestUserSummaries = await retrieveLevelTestUserSummaries();

  response.status(200);
  response.json(levelTestUserSummaries);
});


// levelTestUserSummariesRouter.post("/", async (request, response) => {
//   const levelTestUserSummaries = await retrieveLevelTestUserSummaries();

//   response.status(200);
//   response.json(levelTestUserSummaries);
// });




// router.post('/ajouter', async (request, response) => {  ELIMINAR
//     const newTask = request.body.item;

//     await taskController.addTask(newTask);

//     response.redirect('/'); 
// });



module.exports = levelTestsUserSummariesRouter;