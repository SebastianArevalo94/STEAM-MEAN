const User = require("../models/User");
const userControllers = {};

userControllers.signUp = async (req, res) => {
  const { email, password } = req.body;
  const emaildb = await User.findOne({ email });
  if (emaildb) {
    res.status(400).send("Error, user already exists !");
  } else {
    const newUser = new User({
      email,
      password,
    });
    await newUser.save();
    res.status(200).send("User created !");
  }
};

module.exports = userControllers;
