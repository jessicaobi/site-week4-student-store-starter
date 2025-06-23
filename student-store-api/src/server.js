const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("in.get");
});

app.get("/products", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
