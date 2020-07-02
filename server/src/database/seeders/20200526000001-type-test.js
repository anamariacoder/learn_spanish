const catalogueTypeTest = require("../seeds/20200526000001-type-test");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("type-test", catalogueTypeTest);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("type-test", null, {});
  },
};
