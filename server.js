const express = require("express");
const app = express();
const db = require("./db");
const person = require("./model/person");
const menuItem = require("./model/menuitem");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body  store kar rh hai

app.get("/", (req, res) => {
  res.send("Hello World");
});

//import router file
const personRoutes = require("./routes/personRoutes");
const menuItemsRoutes = require("./routes/menuRoutes");
//use the routes
app.use("/person", personRoutes);
app.use("/menuItem", menuItemsRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));
