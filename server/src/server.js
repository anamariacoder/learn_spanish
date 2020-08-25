const express = require("express"); //Starts the server
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");

const { LevelTest } = require("./models");
const routes = require("./routes");
const server = express();
require("./config/passport");

server.use(bodyParser.json());

server.use(
  "/api",
  cors({
    exposedHeaders: ["Content-Length", "xAuth"],
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use("/api", routes);
// server.use("api/auth", verifyToken);
server.use("/api/images", express.static("src/public"));
//server.use("/api", routes);

// Route publique
server.get("/api/ping", (req, res) => {
  res.json({ message: "Route publique" });
});

module.exports = server;

// Route privée
// server.get("/api/auth", verifyToken, async (req, res) => {
//   const { uid } = req.body;
//   if (uid) {
//     res.json({ message: "OK", uid });
//   } else {
//     res.json({ message: "NOPE" });
//   }
// });

// server.listen(8080, () => {
//   console.log("Server Running on port");
// });

//const PORT = process.env.PORT || 8000;

//server.listen(PORT, () => {
//  console.log(`Server Running on port: ${PORT}`);
//});

// dans routers, il faut un index   ICIIIII

// index va use("/prefix", levelTests_router)

// server.get("/api", async (req, res) => {
//   let levelTest = await LevelTest.findOne({
//     //attributes: ["id", "question", "choix", "answer"],
//     attributes: ["id", ""],

//     raw: true
//   });
//   console.log(levelTest);
//   console.log(levelTest.choix);

//   res.send(levelTest);
// });

// server.get("/api/quizz", (req, res) => {
//   res.send("testing");
// });
