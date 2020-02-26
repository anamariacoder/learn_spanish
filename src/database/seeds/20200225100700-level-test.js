const uuid = require("uuid/v4");

const moment = require("moment");

module.exports = [
  {
    id: uuid(),
    questions: JSON.stringify({
      levelTests: [
        {
          question: "Si usted saluda a alguien en la manana, le dice :",
          choix: ["Buenas noches", "Adios", "Buenos dias"],
          answer: 3
        },
        {
          question: "Si usted se despide de una persona en la tarde, le dice :",
          choix: ["Hola", "Adios", "Buenos dias"],
          answer: 1
        }
      ]
    })
  }
];

const now = moment()
  .utc()
  .toDate();
