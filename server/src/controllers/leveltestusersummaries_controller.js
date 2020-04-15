const { LevelTestUserSummary } = require("../models");

const levelTestUserSummariesController = {
  getAllLevelTestUserSummaries: async () => {
    const levelTestUserSumaries = await LevelTestUserSummary.findAll({
      attributes: [
        "id_user",
        "id_level_test",
        "id_type_test",
        "note_user",
        "total_questions_answered",
        "total_correct_answers",
        "total_wrong_answers",
        "created_at",
      ],

      raw: true,
    });
    return levelTestUserSumaries;
  },
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
