const { LevelTest } = require("../models");

const levelTestController = {
  retrieveLevelTest: async () => {
    const levelTests = await LevelTest.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "questions"],
      raw: true
    });

    return levelTests;
  },
  retrieveATest: async id => {
    const levelTest = await Level.findByPk(id, {
      attributes: ["questions"],
      raw: true
    });

    return levelTest;
  }
};

module.exports = levelTestController;
