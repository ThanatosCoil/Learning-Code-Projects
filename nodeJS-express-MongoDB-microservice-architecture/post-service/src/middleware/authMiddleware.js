const logger = require("../utils/logger");

const authenticateRequest = (req, res, next) => {
  const userId = req.headers["x-user-id"]; //get the user ID from the request headers

  if (!userId) {
    logger.warn("Access attempted without user ID");
    return res.status(401).json({
      success: false,
      message: "Authentication required! Please login to continue",
    });
  }

  req.user = { userId }; //store the user ID in the request object
  next();
};

module.exports = { authenticateRequest };
