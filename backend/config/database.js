const mongoose = require("mongoose");
require("dotenv").config();

exports.connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
      console.log(err);
      process.exit(1); // Exit the process with an error code
    });
};
