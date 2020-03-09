const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const verifyToken = require("./middleware/verify_token");
const { LevelTest } = require("./models");
const routes = require("./routes"); /*avec la 's' */
const server = express();

server.use(bodyParser.json()); /* ajuté */
server.use('/api',cors());
server.use('/api',routes); /* ajuté */
server.use("api/auth", verifyToken); /* ajuté */
server.use("/api/images", express.static("src/public"));
server.use("/api", routes);

// Route publique
server.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Route privée
server.get("/api/auth",verifyToken, async (req, res) => {
  const { uid } = req.body;
  if (uid) {
    res.json({ message: "OK", uid });
  } else {
    res.json({ message: "NOPE" });
  }
});

// server.listen(8080, () => {   
//   console.log("Server Running on port");
// });

//const PORT = process.env.PORT || 8000; iciiiiiiiiiiii

//server.listen(PORT, () => {   //ICIIIII j'ai changé
//  console.log(`Server Running on port: ${PORT}`);
//});


// dans routers, il faut un index   ICIIIII

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


module.exports = server;
