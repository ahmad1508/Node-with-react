//root file in node named index.js
const express = require("express");

const app = express(); //create express app

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
