const mongoose = require("mongoose");
//Define the mongoDb connection URL
// const mongoURl = process.env.MONGODB_URL_LOCAL;
require("dotenv").config();
const mongoURl = process.env.MONGODB_URL;
//set uo MongoDb connection
mongoose.connect(mongoURl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//define event listener for database connection

db.on("connected", () => {
  console.log("Connected to MongoDb server");
});
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//export db;
module.exports = db;
