const express = require("express");
const { LevelTest } = require("./models");
const cors = require("cors");
const routes = require("./routes")

const server = express();
server.use(cors());

server.use("/api/images", express.static("src/public"));

const bodyParser = require("body-parser");

server.use("/api", routes);
// dans routers, il faut un index   AQUIIIIII
// index va use("/prefix", levelTests_router)

// server.get("/api", async (req, res) => {
//   let levelTest = await LevelTest.findOne({
//     //attributes: ["id", "question", "choix", "answer"],
//     attributes: ["id", "questions"],

//     raw: true
//   });
//   console.log(levelTest);
//   console.log(levelTest.choix);

//   res.send(levelTest);
// });

// server.get("/api/quizz", (req, res) => {
//   res.send("testing");
// });

server.use(bodyParser.json());

module.exports = server;
