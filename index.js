const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Devops Pipeline");
});

app.listen(PORT, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});
