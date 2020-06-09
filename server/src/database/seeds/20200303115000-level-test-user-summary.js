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
    total_questions_answered: 5,
    total_correct_answers: 5,
    total_wrong_answers: 0,
    created_at: now,
    updated_at: now
  }, // Originalmente sin la coma ","
  { // Originalmente sin este bloque de abajo
   // id_user: "2675eb63-b899-4aa5-ade1-c106b94156bd", //actualiser apres la creation de User
   // id_level_test: "6855f493-28a5-4657-9b1f-281be2658864",//actualiser apres la creation de Type-test
   // id_type_test: "e4436de5-6746-413f-bf67-a99e2f1f4d18",//actualiser apres la creation de level-test
    note_user: 8,
    total_questions_answered: 5,
    total_correct_answers: 4,
    total_wrong_answers: 1,
    created_at: now,
    updated_at: now
  },

  

]; // si estaba originalmente
