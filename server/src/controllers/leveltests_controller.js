const { LevelTest } = require("../models");

const levelTestController = {
  retrieveLevelTest: async () => {
    const levelTests = await LevelTest.findAll({
      attributes: ["id", "questions"],
      raw: true,
    });


    console.log("dans retrieveLevelTest");
    console.log(levelTests);
    return levelTests;
  },
  retrieveATest: async (id) => {
    const levelTest = await Level.findByPk(id, {
      attributes: ["questions"],
      raw: true,
    });

    console.log("dans retrieveATest");
    return levelTest;
  },
};

module.exports = levelTestController;

// [
//   //test 1
//   {"id":"be1f19d4-f5d9-416e-8e0c-bb354d325f6d",

//   "questions":{
//           "levelTests":[
//             {"choix":[
//               "Buenas nochesaaaaaa",
//               "Adiós",
//               "Buenos días"
//             ],
//             "image":"/api/images/images.jpeg",
//             "answer":2,
//             "question":"Si usted saluda a alguien en la mañanaaaaaaaa, le dice :"},

//             {"choix":["Hola",
//             "Adiós",
//             "Buenos días"],
//             "image":"/api/images/images.jpeg",
//             "answer":1,
//             "question":"Si usted se despide de una persona, le dice :"},

//             {"choix":["Chao. Nos vemos luego.","Muy bien, gracias. Y usted ?","Hasta la vista"],
//             "image":"/api/images/images.jpeg",
//             "answer":1,"question":"Buenos días, cómo está usted ?"}]
//           }},

//   {"id":"fb538769-da90-4a30-9e02-fa2204e7fc37",

//    "questions":
//           {"levelTests":[
//             {"choix":[
//               "Buenas noches bbbbbbbbbbbbbbbbbbbb",
//               "Adiós",
//               "Buenos días"],
//               "image":"/api/images/images.jpeg",
//               "answer":2,
//               "question":"Si usted saluda a alguien en la mañana bbbbbbbbbbbbbb, le dice :"},
//             {"choix":[
//               "Hola",
//               "Adiós",
//               "Buenos días"],
//               "image":"/api/images/images.jpeg",
//               "answer":1,
//               "question":"Si usted se despide de una persona, le dice :"},
//             {"choix":["Chao. Nos vemos luego.",
//             "Muy bien, gracias. Y usted ?",
//             "Hasta la vista"],
//             "image":"/api/images/images.jpeg",
//             "answer":1,
//             "question":"Buenos días, cómo está usted ?"}]}}]
