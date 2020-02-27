const uuid = require("uuid/v4");

const moment = require("moment");

module.exports = [
  {
    id: uuid(),
    questions: JSON.stringify({
      levelTests: [
        {
          image: "/api/images/images.jpeg",
          question: "Si usted saluda a alguien en la manana, le dice :",
          choix: ["Buenas noches", "Adios", "Buenos dias"],
          answer: 3
        },
        {
          image: "/api/images/images.jpeg",
          question: "Si usted se despide de una persona en la tarde, le dice :",
          choix: ["Hola", "Adios", "Buenos dias"],
          answer: 1
        }
        {
          image: "/api/images/images.jpeg",
          question: "Bueno dias, como esta usted?",
          choix: ["Chao", "Muy bien, gracias.", "Hasta la vista"],
          answer: 2
        }
      ]
    })
  }
];

const now = moment()
  .utc()
  .toDate();
