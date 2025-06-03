const User = require("../models/User");
const RefreshToken = require("../models/RefreshToken");
const logger = require("../utils/logger");
const { generateToken } = require("../utils/generateToken");
const { validateRegistration, validateLogin } = require("../utils/validation");

//user registration
const registerUser = async (req, res) => {
  logger.info("Registration endpoint hit");
  try {
    //validate schema
    const { error } = validateRegistration(req.body);
    if (error) {
      logger.warn("Invalid registration data", error.details[0].message);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    //check if user exists
    const { email, password, username } = req.body;
    let user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      logger.warn("User already exist");
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    //create user
    user = new User({ email, password, username });
    await user.save();
    logger.warn("User created successfully", user._id);

    //generate token
    const { accessToken, refreshToken } = await generateToken(user);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    logger.error("Registration error occurred", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//user login
const loginUser = async (req, res) => {
  logger.info("Login endpoint hit");
  try {
    //validate schema
    const { error } = validateLogin(req.body); //Выводит ошибку, если данные не соответствуют схеме
    if (error) {
      logger.warn("Invalid login data", error.details[0].message);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    //check if user exists
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      logger.warn("User does not exist");
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    //check password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      logger.warn("Invalid password");
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    //generate token
    const { accessToken, refreshToken } = await generateToken(user);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      accessToken,
      refreshToken,
      userID: user._id,
    });
  } catch (error) {
    logger.error("Login error occurred", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//refresh token
const refreshTokenUser = async (req, res) => {
  logger.info("Refresh token endpoint hit");
  try {
    //check if refresh token exists
    const { refreshToken } = req.body;
    if (!refreshToken) {
      logger.warn("Refresh token does not exist");
      return res.status(400).json({
        success: false,
        message: "Refresh token does not exist",
      });
    }

    //check if refresh token is valid
    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken || storedToken.expiresAt < new Date()) {
      logger.warn("Refresh token does not exist or expired");
      return res.status(401).json({
        success: false,
        message: "Refresh token does not exist or expired",
      });
    }

    //check if user exists
    const user = await User.findById(storedToken.user);
    if (!user) {
      logger.warn("User does not exist");
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }

    //generate token
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      await generateToken(user);

    //delete old refresh token
    await RefreshToken.findByIdAndDelete({ _id: storedToken._id });

    res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    logger.error("Refresh token error occurred", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//logout
const logoutUser = async (req, res) => {
  logger.info("Logout endpoint hit");
  try {
    //check if refresh token exists
    const { refreshToken } = req.body;
    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!refreshToken) {
      logger.warn("Refresh token does not exist");
      return res.status(400).json({
        success: false,
        message: "Refresh token does not exist",
      });
    }

    //delete refresh token
    await RefreshToken.findByIdAndDelete({ _id: storedToken._id });
    logger.info("Refresh Token deleted successfully");


    //delete access token from client side
    
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    logger.error("Logout error occurred", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  refreshTokenUser,
  logoutUser,
};
