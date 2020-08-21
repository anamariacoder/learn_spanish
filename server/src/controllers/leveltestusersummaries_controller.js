const { LevelTestUserSummary } = require("../models");
const { Op } = require("sequelize");

const levelTestUserSummaryController = {
  //retrieveLevelTestUserSummariesByUser: async id => {
  // id = 'a2936a50-1a27-4d10-8d50-0e7ee30c7a4c';//User PAOLA
  // const levelTestUserSumariesByUser = await LevelTestUserSummary.findByPk(id, { //OUI
  retrieveLevelTestUserSummariesByUser: async (id) => {
    //NON
    console.log(
      "retrieveLevelTestUserSummariesByUser id  del usuario ???: ",
      id
    );
    //id = "a2936a50-1a27-4d10-8d50-0e7ee30c7a4c";
    //const { userId }= data;  //
    //const { idUser }= data;  //remplace userId de ligne dessus
    const levelTestUserSumariesByUser = await LevelTestUserSummary.findAll({
      //NON
      //  order: ["created_at", "DESC"], //NON

      where: {
        //   //OUI
        idUser: {
          //     //OUI
          //     //   //   // [Op.eq]: userId,  //OUI
          //
          //     //   // //Je dois d'abord passer l'identifiant utilisateur
          //  [Op.eq]: '904c68ee-b385-464f-bdc9-dda2281e518f'  //OUI MARCELLL

          [Op.eq]: "b86077a2-314a-44b7-8db3-95eb318c9402", //CARLOS est un user qui est dans la BdD
          //
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

    // if (!LevelTestUserSumaries)
    //   // 13 août
    //   throw new NotFoundError( // 13 août
    //     "Ressource introuvable.", // 13 août
    //     "Désolé, nous n'avons pas trouvé la ressource demandée. Vérifiez l'URI et réessayez." // 13 août
    //   ); // 13 août
  }, // 13 août

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
