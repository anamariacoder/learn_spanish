const uuid = require("uuid/v4");

const moment = require("moment");

module.exports = [
  {
    id: uuid(),
    // changer 'questions' par 'quiz' ou 'questionnaire'
    questions: JSON.stringify({
      levelTests: [
        {
          image: "/api/images/saluermatin.jpg",
          question: "1. Si usted saluda a alguien en la mañana, le dice :",
          choix: [
            "Buenas noches", 
            "Adiós", 
            "Buenos días"],
          answer: 2
        },
        {
          image: "/api/images/saluerbye.jpg",
          question: "2. Si usted se despide de una persona, le dice :",
          choix: [  
            "Hola", 
            "Adiós", 
            "Buenos días"],
          answer: 1
        },
        {
          image: "/api/images/salutations2.jpg",
          question: "3. Buenos días, cómo está usted ?",
          choix: [
            "Chao. Nos vemos luego.",
            "Muy bien, gracias. ¿ Y usted ?",
            "Hasta la vista."
          ],
          answer: 1
        },
        {
          image: "/api/images/salutation3.jpg",
          question: "4. Si le presentan a alguien, usted dice :",
          choix: [
            "Hasta pronto.",
            "Nos vemos.",
            "Tanto gusto. Un placer conocerle."
          ],
          answer: 2
        },
        {
          image: "/api/images/saluer-ami1.jpg",
          question: "5. Para saludar a un amigo, usted le dice :",
          choix: [
            "Hola. ¿ Cómo estás ?",
            "¿ Cómo está usted ?",
            "Encantado de verle."
          ],
          answer: 0
        }
      ]
    })
  }
];

const now = moment()
  .utc()
  .toDate();
