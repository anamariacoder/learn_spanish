/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("level-test", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      questions: {
        allowNull: false,
        type: Sequelize.JSONB
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("level-test");
  }
};
