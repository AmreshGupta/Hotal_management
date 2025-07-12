const express = require("express");
const app = express();
const db = require("./db");
const person = require("./model/person");
const menuItem = require("./model/menuitem");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body  store kar rh hai
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

//import router file
const personRoutes = require("./routes/personRoutes");
const menuItemsRoutes = require("./routes/menuRoutes");
//use the routes
app.use("/person", personRoutes);
app.use("/menuItem", menuItemsRoutes);

app.listen(PORT, () => console.log("Listening on port 3000"));
