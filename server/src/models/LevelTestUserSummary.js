
module.exports = (sequelize, DataTypes) => {
  const LevelTestUserSummary = sequelize.define(
    "LevelTestUserSummary",
    {
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
       // defaultValue: DataTypes.UUIDV4,
        //validate: {
        //  isUUID: 4,
        //  notNull: true
        },
      

      id_level_test: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
     
      id_type_test: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },

      note_user: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
    
      total_questions_answered: {
        allowNull: true,
        type: DataTypes.INTEGER
      },

      total_correct_answers: {
        allowNull: true,
        type: DataTypes.INTEGER
      },

      total_wrong_answers: {
        allowNull: true,
        type: DataTypes.INTEGER
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: "level-test-user-summary"
    }
  );

  LevelTestUserSummary.associate = () => {};

  return LevelTestUserSummary;
};











// AVANT ********************


// module.exports = (sequelize, DataTypes) => {
//   const LevelTestUserSummary = sequelize.define(
//     "LevelTestUserSummary",
//     {
//       id_user: {
//         allowNull: false,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         validate: {
//           isUUID: 4,
//           notNull: true
//         }
//       },
//       questions: {
//         allowNull: false,
//         type: DataTypes.JSONB,
//       }
     
//     },
//     {
//       tableName: "level-test-user-summary"
//     }
//   );

//   LevelTestUserSummary.associate = () => {};

//   return LevelTestUserSummary;
// };
