const express = require("express");
const app = express();

app
  .use(express.json())
  .get("/", (req, res) => {})

app.listen(3001, () => `Listening on port 3001`)