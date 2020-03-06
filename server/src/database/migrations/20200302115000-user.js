/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },

      account:{
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      first_name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      last_name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
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
    return queryInterface.dropTable("user");
  }
};
