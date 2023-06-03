const jwt = require("jsonwebtoken");
require("dotenv").config();
const test = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log(token);

  if (!token) {
    res.json({
      success: false,
      message: "Token missing",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.body = decode;
    // console.log(decode);
    next();
  } catch (error) {
    console.log("error during decoding the token");
    res.json({
      success: false,
      message: "error occured during the decoding token ",
      error: error,
    });
    console.log(error);
  }
};
module.exports = test;
