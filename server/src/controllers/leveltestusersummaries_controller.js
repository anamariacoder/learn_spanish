const { LevelTestUserSummary } = require("../models");

const levelTestUserSummaryController = {
  retrieveLevelTestUserSummary: async () => {
    const LevelTestUserSumaries = await LevelTestUserSummary.findAll({
      attributes: ["id", "questions"],
      raw: true
    });

    return LevelTestUserSumaries;
  },
  retrieveALevelTestUserSummary: async id => {
    const LevelTestUserSummary = await LevelTestUserSummary.findByPk(id, {
      attributes: ["questions"],
      raw: true
    });

    return LevelTestUserSummary;
  }


  
};

module.exports = levelTestUserSummaryController;
