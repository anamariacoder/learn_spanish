module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("level-test-user-summary", {
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "user",
          key: "id"
        }
      },

      id_level_test: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "level-test",
          key: "id"
        }
      },

      id_type_test: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "type-test",
          key: "id"
        }
      },

      note_user: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      total_questions_answered: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      total_correct_answers: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      total_wrong_answers: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("level-test-user-summary");
  }
};
