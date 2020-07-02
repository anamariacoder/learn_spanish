const catalogueLevelTestUserSummary = require("../seeds/20200526000003-level-test-user-summary");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "level-test-user-summary",
      catalogueLevelTestUserSummary
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("level-test-user-summary", null, {});
  },
};
