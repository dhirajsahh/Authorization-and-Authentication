const isadmin = async (req, res, next) => {
  const { role } = req.body;
  if (!role) {
    res.json({
      message: "Role is missing",
    });
  }
  try {
    if (role === "admin") next();
    else {
      res.json({
        message: "This is the protected route for admin you cannot enter",
      });
    }
  } catch (error) {
    console.log("error occured during role managing");
    console.log(error);
  }
};
module.exports = isadmin;
