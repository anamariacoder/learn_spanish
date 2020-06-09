const { LevelTestUserSummary } = require("../models");
const { Op } = require("sequelize");

const levelTestUserSummaryController = {
  // retrieveLevelTestUserSummariesByUser: async id => {
  //   const levelTestUserSumariesByUser = await testsUserSummary.findByPk(id, {
  retrieveLevelTestUserSummariesByUser: async (data) => {
    const { userId }= data;
    const levelTestUserSumariesByUser = await LevelTestUserSummary.findAll({
    //  order: ["created_at", "DESC"],

      where: {
        idUser:{
       
          [Op.eq]: userId,
        //Ca marche avec l'id du test, mais ne marche pas pour le username. 
        //Je dois d'abord passer l'identifiant utilisateur
        //[Op.eq]: '2675eb63-b899-4aa5-ade1-c106b94156bd'
        // 1675eb54-a540-4aa5-ade2-c106b94187af'
        },
      },
      attributes: [
        "idUser",
        "idLevelTest",
        "idTypeTest",
        "note_user",
        "total_questions_answered",
        "total_correct_answers",
        "total_wrong_answers",
        "created_at",
      ],
      raw: true,
    });

    console.log(
      "CONTROLLER retrieveLevelTestUserSummariesByUser = levelTestUserSumariesByUser  = ",
      levelTestUserSumariesByUser
    );

    return levelTestUserSumariesByUser;
  },

  //Modification a apliquer apres la migration
  // createLevelTestUserSummaries: async (data) => {
  //   const { levelTestUserId } = data;
  //   const levelTest = await getLevelTest(levelTestId);

  //   const newLevelTestuserSummaries = {
  //     leveltest,
  //     ...PublicKeyCredential(id),
  //   };

  //   const levelTestUserSummaryCreated = await LevelTestUserSummary.create(
  //     newLevelTestuserSummaries
  //   );
  //   return levelTestUserSummaryCreated;
  // },
};

module.exports = levelTestUserSummaryController;

//******************************************************** */
//   return LevelTestUserSummary;
// },

// if (!LevelTestUserSumaries)
//   throw new NotFoundError(
//     "Ressource introuvable.",
//     "Désolé, nous n'avons pas trouvé la ressource demandée. Vérifiez l'URI et réessayez."
//   );

// retrieveALevelTestUserSummary: async (id) => {
//   const LevelTestUserSummary = await LevelTestUserSummary.findByPk(id_user{
//     attributes: [
//       "id_user",
//       "id_level_test",
//       "id_type_test",
//       "note_user",
//       "total_questions_answered",
//       "total_correct_answers",
//       "total_wrong_answers",
//       "created_at"
//     ],
//     raw: true,
//   });

//   return LevelTestUserSummary;
// },
// };

// ******************
// const { LevelTestUserSummary } = require("../models");

// const levelTestUserSummaryController = {
//   retrieveLevelTestUserSummary: async () => {
//     const LevelTestUserSumaries = await LevelTestUserSummary.findAll({
//       attributes: ["id", "questions"],
//       raw: true
//     });

//     return LevelTestUserSumaries;
//   },
//   retrieveALevelTestUserSummary: async id => {
//     const LevelTestUserSummary = await LevelTestUserSummary.findByPk(id, {
//       attributes: ["questions"],
//       raw: true
//     });

//     return LevelTestUserSummary;
//   }

// };

// module.exports = levelTestUserSummaryController;
