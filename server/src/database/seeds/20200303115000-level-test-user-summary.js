const uuid = require("uuid/v4");

const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id_user: "aafe9430-383c-4e37-9725-12fa1188324a",
    id_level_test: "be1f19d4-f5d9-416e-8e0c-bb354d325f6d",
    id_type_test: "094f83d3-5331-4c78-99a2-83338258f1c2",
    note_user: 10,
    total_questions_answered: 10,
    total_correct_answers: 5,
    total_wrong_answers: 5,
    created_at: now,
    updated_at: now
  }
];
