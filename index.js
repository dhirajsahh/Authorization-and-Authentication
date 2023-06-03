const express = require("express");
require("dotenv").config();
const connectdb = require("./config/connectdb");
const Port = process.env.PORT;
const app = express();
const mainRouter = require("./routes/mainRouter");
app.use(express.json());
app.use("/api", mainRouter);
connectdb();
app.listen(Port, () => {
  console.log("app is running in port ", Port);
});
