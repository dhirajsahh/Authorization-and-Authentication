const mongoose = require("mongoose");
require("dotenv").config();
const mongodburi = process.env.MONGODB_URI;
const connectdb = async () => {
  try {
    await mongoose.connect(mongodburi);
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("error occured during connectin database");
    console.error(error);
  }
};
module.exports = connectdb;
