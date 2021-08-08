const subscriber = require("./worker");
const express = require("express");

const app = express();

app.listen(process.env.PORT || '8081', () => {
  console.log("The server started listeting...");
});

subscriber.setup();
