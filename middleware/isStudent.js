const isStudent = async (req, res, next) => {
  const { role } = req.body;
  if (!role) {
    res.json({
      message: "Role is missing",
    });
  }
  try {
    if (role === "student") next();
    else {
      res.json({
        message: "This is the protected route for student you cannnot enter",
      });
    }
  } catch (error) {
    console.log("error occured during role managing");
    console.log(error);
  }
};
module.exports = isStudent;
