const uuid = require("uuid/v4");

const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    name_type_test: "Test de Niveau Nº1",
    created_at: now,
    updated_at: now
  }
];
