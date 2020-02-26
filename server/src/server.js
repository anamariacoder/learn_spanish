const express = require("express");
const { LevelTest  } = require("./models");
const cors = require('cors');

const server = express()
server.use(cors())

const bodyParser = require("body-parser");

server.get('/', async (req, res) => {
  let levelTest = await LevelTest.findOne(
    {
      //attributes: ["id", "question", "choix", "answer"],
      attributes: ["id", "questions"],
      
      raw: true
    }
  )
  console.log(levelTest)
  console.log(levelTest.choix)
 
  res.send(levelTest);
})

server.get('/api/quizz', (req, res) => {
  res.send('tutu');
})

server.use(bodyParser.json());

module.exports = server;

