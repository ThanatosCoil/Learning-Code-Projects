const rateLimit = require("express-rate-limit");

const createBasicRateLimiter = (maxRequest, time) => {
  return rateLimit({
    limit: maxRequest,
    windowMs: time,
    message: "Too many request, please try again later",
    standardHeaders: true,
    legacyHeaders: false,
  });
};

module.exports = { createBasicRateLimiter };
