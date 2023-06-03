const router = require("express").Router();
const signup = require("../controllers/signup");
const login = require("../controllers/login");
const test = require("../middleware/auth");
const protectedRoute = require("../controllers/protect");
const isStudent = require("../middleware/isStudent");
const isadmin = require("../middleware/isadmin");
router.use("/", signup);
router.use("/", login);
router.use("/test", test, isStudent, protectedRoute);
router.get("/admin", test, isadmin, (req, res) => {
  res.json({
    success: true,
    message: "welcome admin",
  });
});

module.exports = router;
