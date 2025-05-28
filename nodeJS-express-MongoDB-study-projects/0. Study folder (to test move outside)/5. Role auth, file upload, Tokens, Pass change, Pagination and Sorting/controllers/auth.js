const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  //check if user with same name/email already exist
  const checkExistingUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (checkExistingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exist. Try different username or email",
    });
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create a new user and save in DB
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role: role || "user",
  });

  await newUser.save();

  if (newUser) {
    res.status(201).json({ newUser });
  } else {
    res.status(400).json({
      success: false,
      message: "Unable to register user, please try again",
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  //check if user exist
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User does not exist",
    });
  }
  //check password
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });
  }

  //create user token
  const accessToken = jwt.sign(
    {
      userId: user._id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );

  res.status(200).json({
    success: true,
    message: "Logged in successful",
    accessToken,
  });
};

//change password
const changePassword = async (req, res) => {
  const userId = req.userInfo.userId;

  //extract old and new password
  const { oldPassword, newPassword } = req.body;

  //find the current logged in user
  const user = await User.findById(userId);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  }

  //check if old password is correct
  const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Old password is not correct" });
  }

  //hash the new password
  const salt = await bcrypt.genSalt(10);
  const newHashedPassword = await bcrypt.hash(newPassword, salt);

  //update user password
  user.password = newHashedPassword;
  await user.save();

  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
};

module.exports = { registerUser, loginUser, changePassword };
