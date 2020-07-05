const express = require("express");

const app = express();

const port = 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
