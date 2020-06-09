const catalogLevelTest = require("../seeds/20200526000002-level-test");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("level-test", catalogLevelTest);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("level-test", null, {});
  }
};
