const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CodeQL working");
});

app.listen(3000);
