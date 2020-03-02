const uuid = require("uuid/v4");

const moment = require("moment");

module.exports = [
  {
    id: uuid(),
    // changer 'questions' par 'quiz' ou 'questionnaire'
    questions: JSON.stringify({
      levelTests: [
        {
          image: "/api/images/images.jpeg",
          question: "Si usted saluda a alguien en la mañana, le dice :",
          choix: [
            "Buenas noches", 
            "Adiós", 
            "Buenos días"],
          answer: 2
        },
        {
          image: "/api/images/images.jpeg",
          question: "Si usted se despide de una persona, le dice :",
          choix: [  
            "Hola", 
            "Adiós", 
            "Buenos días"],
          answer: 1
        },
        {
          image: "/api/images/images.jpeg",
          question: "Buenos días, cómo está usted ?",
          choix: [
            "Chao. Nos vemos luego.",
            "Muy bien, gracias. Y usted ?",
            "Hasta la vista"
          ],
          answer: 1
        }
      ]
    })
  }
];

const now = moment()
  .utc()
  .toDate();
