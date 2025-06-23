const express = require("express");
const morgan = require("morgan")
const cors = require("cors");
const app = express();

app.use(cors())
app.use(morgan("dev"));

app.get('/', cors(), (req, res) => {


}
)

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log("Server running on port 3000"));
