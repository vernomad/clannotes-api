const mongoose = require("mongoose");
// require("dotenv").config({ debug: true });
const connectDB = async () => {
  try {
    const conn = mongoose.connect(
      process.env.DATABASE_URL,
      (err, database) => {
        if (err) {
          return console.log(err);
        }
        console.log(`Mongo DB Connected:`);
        db = database;
      }
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;