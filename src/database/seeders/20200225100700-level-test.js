const catalogLevelTest = require("../seeds/20200225100700-level-test");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("level-test", catalogLevelTest);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("level-test", null, {});
  }
};
