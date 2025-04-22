const express = require("express");
const app = express();
const port = 3000;

app.get("/0", (req, res) => {
  res.send("Hello world!");
});

app.get("/1", (req, res) => {
  console.log("Hello, world!");
  eval(req.body.command1);
  res.send("Hello world!");
}

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
