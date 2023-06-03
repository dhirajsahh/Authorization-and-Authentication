const router = require("express").Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({
        success: false,
        message: "Enter your email",
      });
    }
    if (!password) {
      res.status(400).json({
        success: false,
        message: "Enter your password",
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      res.status(200).json({
        success: false,
        message: "signup first ",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user.id,
          role: user.role,
        },
        process.env.SECRET_KEY,
        { expiresIn: "30m" }
      );
      user = user.toObject();
      user.password = undefined;
      user.token = accessToken;
      res.status(200).json({
        user,
        message: "user loged in succesfully",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "incorrect password",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
