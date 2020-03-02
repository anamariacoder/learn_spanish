const uuid = require("uuid/v4");

const moment = require("moment");

module.exports = [
  {
    id: uuid(),
    account: "demoAccount",
    first_name: "Demo",
    last_name: "Account", 
    password: "DemoAccount",
    email: "demoaccount@demo.com", 
    date_created: now,
    date_updated: now 
  }
     
];

const now = moment()
  .utc()
  .toDate();
