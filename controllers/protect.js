const router = require("express").Router();
router.get("/", async (req, res) => {
  try {
    res.json({
      message: "welcome to the protected route for student",
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
