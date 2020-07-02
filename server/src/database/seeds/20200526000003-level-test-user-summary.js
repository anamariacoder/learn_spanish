const uuid = require("uuid/v4");

const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),

    // id_user: "aafe9430-383c-4e37-9725-12fa1188324a",
    // id_level_test: "be1f19d4-f5d9-416e-8e0c-bb354d325f6d",
    // id_type_test: "094f83d3-5331-4c78-99a2-83338258f1c2",
    id_user: "904c68ee-b385-464f-bdc9-dda2281e518f",
    id_level_test: "72fbe54f-e2ff-4645-ab6b-71e1d4729349",
    id_type_test: "e916d4a4-ef70-43a8-b887-2b070002dd4a",
    note_user: 10,
    total_questions_answered: 5,
    total_correct_answers: 5,
    total_wrong_answers: 0,
    created_at: now,
    updated_at: now,
  },
  // {
  //   id: uuid(),
  //   id_user: "7b34b0bf-1cb7-45c2-8318-0aacb75096af", //actualiser apres la creation de User
  //   id_level_test: "72fbe54f-e2ff-4645-ab6b-71e1d4729349", //actualiser apres la creation de Type-test
  //   id_type_test: "e916d4a4-ef70-43a8-b887-2b070002dd4a", //actualiser apres la creation de level-test
  //   note_user: 8,
  //   total_questions_answered: 5,
  //   total_correct_answers: 4,
  //   total_wrong_answers: 1,
  //   created_at: now,
  //   updated_at: now,
  // }

];
