const router = require("express").Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!email) {
      res.json({
        success: false,
        message: "Enter the email",
      });
    }
    if (!name) {
      res.json({
        success: false,
        message: "Enter the name",
      });
    }
    if (!password) {
      res.json({
        success: false,
        message: "Enter the password",
      });
    }
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(400).json({
        success: false,
        message: "user aleardy exists",
      });
    }
    let hashedpassword;
    try {
      hashedpassword = await bcrypt.hash(password, 10);
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "error in hasing password",
      });
    }
    await User.create({
      name,
      email,
      password: hashedpassword,
      role,
    });
    res.status(200).json({
      message: "Data saved succesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error in entering the data in database",
    });
  }
});
module.exports = router;
