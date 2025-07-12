const mongoose = require("mongoose");
//Define the mongoDb connection URL
const mongoURl = "mongodb://127.0.0.1:27017";

//set uo MongoDb connection
mongoose.connect(mongoURl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get the defult connection
//mongoose maintain a defult connection representing the mongoDb connection
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
