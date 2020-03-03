const uuid = require("uuid/v4");

const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    account: "demoAccount",
    first_name: "Demo",
    last_name: "Account",
    password: "DemoAccount",
    email: "demoaccount@demo.com",
    created_at: now,
    updated_at: now
  }
];
