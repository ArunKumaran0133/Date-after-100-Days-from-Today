const express = require("express");
var addDays = require("date-fns/addDays");
const Express = express();

Express.get("/", (request, response) => {
  let todayDate = new Date();
  let add100Days = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );
  response.send(
    `${add100Days.getDate()}-${
      add100Days.getMonth() + 1
    }-${add100Days.getFullYear()}`
  );
});

Express.listen(3000);

module.exports = Express;
