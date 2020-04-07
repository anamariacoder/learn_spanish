module.exports = (sequelize, DataTypes) => {
  const LevelTestUserSummary = sequelize.define(
    "LevelTestUserSummary",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      idUser: {
        field: "id_user",
        allowNull: false,
        type: DataTypes.UUID
      },

      idLevelTest: {
        field: "id_level_test",
        allowNull: false,
        type: DataTypes.UUID
      },

      idTypeTest: {
        field: "id_type_test",
        allowNull: false,
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

  LevelTestUserSummary.associate = models => {
    LevelTestUserSummary.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreingKey: {
        name: "id_user",
        allowNull: false
      }
    });

    LevelTestUserSummary.belongsTo(models.LevelTest, {
      onDelete: "CASCADE",
      foreingKey: {
        name: "id_level_test",
        allowNull: false
      }
    });
    LevelTestUserSummary.belongsTo(models.TypeTest, {
      onDelete: "CASCADE",
      foreingKey: {
        name: "id_type_test",
        allowNull: false
      }
    });
  };
  return LevelTestUserSummary;

  
  // LevelTestUserSummary.associate = () => {};

  // return LevelTestUserSummary;
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
