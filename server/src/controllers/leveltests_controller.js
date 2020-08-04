const { LevelTest } = require("../models");
//2
const levelTestController = {
  retrieveLevelTest: async () => {
    const levelTests = await LevelTest.findAll({
      attributes: ["id", "questions"],
      raw: true,
    });
    console.log("dans retrieveLevelTest avec findAll");
    console.log(levelTests);
    return levelTests;
  },
  retrieveATest: async (id) => {
    const levelTest = await Level.findByPk(id, {
      attributes: ["questions"],
      raw: true,
    });
    console.log("dans retrieveATest");
    return levelTest;
  },
};

module.exports = levelTestController;
