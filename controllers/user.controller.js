const User = require("../models/User");

exports.userRegister = async (req, res) => {
  const newUser = await new User({ ...req.body });
  const email = req.body.email;
  const user = await User.findOne({ email });

  try {
    if (user) return res.status(402).json({ msg: `User already exist` });

    await newUser.save();

    res.status(200).json({ msg: `Register user success` });
  } catch (error) {
    res.status(400).json({ msg: `Register user failed` });
  }
};
