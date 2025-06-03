require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Redis = require("ioredis");
const helmet = require("helmet");
const logger = require("./utils/logger");
const { rateLimit } = require("express-rate-limit");
const { RedisStore } = require("rate-limit-redis");
const proxy = require("express-http-proxy");
const errorHandler = require("./middleware/errorHandler");
const validateToken = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

//redis client
const redisClient = new Redis(process.env.REDIS_URL);

//middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

//logs for requests
app.use((req, res, next) => {
  logger.info(`Received ${req.method} request to ${req.url}`);
  logger.info(`Request body, ${req.body}`);
  next();
});

//rate limiting
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100,
  standardHeaders: true, //Хочу ли я включить информацию отсюда в заголовок res
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn(`Sensitive endpoint rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({
      success: false,
      message: "Too many requests, please try again later",
    });
  },
  store: new RedisStore({
    sendCommand: (...args) => redisClient.call(...args),
  }),
});

//apply rate limiting
app.use(rateLimiter);

//proxy settings Прокси нужен чтобы обращаться к другим сервисам через api-gateway
const proxyOptions = {
  proxyReqPathResolver: (req) => {
    return req.originalUrl.replace(/^\/v1/, "/api"); //Заменяем /v1 на /api потому что в identity-service у нас /api
  },
  proxyErrorHandler: (err, res, next) => {
    logger.error(`Proxy error: ${err.message}`);
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
    next(err); //Важно вызвать next(err) чтобы express обработал ошибку
  },
};

//setting up proxy for identity service
app.use(
  "/v1/auth",
  proxy(process.env.IDENTITY_SERVICE_URL, {
    ...proxyOptions,
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      //Модифицируес запрос
      proxyReqOpts.headers["Content-Type"] = "application/json"; //Добавляем заголовок Content-Type
      return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
      //Модифицируем ответ
      logger.info(
        `Received response from identity-service with status code: ${proxyRes.statusCode}`
      );
      return proxyResData;
    },
  })
);

//setting up proxy for posts service
app.use(
  "/v1/posts",
  validateToken,
  proxy(process.env.POST_SERVICE_URL, {
    ...proxyOptions,
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers["Content-Type"] = "application/json";
      proxyReqOpts.headers["x-user-id"] = srcReq.user.userId; //Добавляем заголовок x-user-id с ID пользователя
      return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
      logger.info(
        `Received response from post-service with status code: ${proxyRes.statusCode}`
      );
      return proxyResData;
    },
  })
);

//setting up proxy for media service
app.use(
  "/v1/media",
  validateToken,
  proxy(process.env.MEDIA_SERVICE_URL, {
    ...proxyOptions,
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers["x-user-id"] = srcReq.user.userId;
      if (!srcReq.headers["content-type"].startsWith("multipart/form-data")) {
        proxyReqOpts.headers["Content-Type"] = "application/json";
      }
      return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
      logger.info(
        `Received response from media-service with status code: ${proxyRes.statusCode}`
      );
      return proxyResData;
    },
    parseReqBody: false, //Если false, то никаких действий с телом не будет выполнено и, соответственно, req.body больше не будет установлен
  })
);

//setting up proxy for search service
app.use(
  "/v1/search",
  validateToken,
  proxy(process.env.SEARCH_SERVICE_URL, {
    ...proxyOptions,
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers["Content-Type"] = "application/json";
      proxyReqOpts.headers["x-user-id"] = srcReq.user.userId;
      return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
      logger.info(
        `Received response from search-service with status code: ${proxyRes.statusCode}`
      );
      return proxyResData;
    },
  })
);

//error handling
app.use(errorHandler);

//start server
app.listen(PORT, () => {
  logger.info(`API Gateway running on port ${PORT}`);
  logger.info(
    `Identity service running on ${process.env.IDENTITY_SERVICE_URL}`
  );
  logger.info(`Post service running on ${process.env.POST_SERVICE_URL}`);
  logger.info(`Media service running on ${process.env.MEDIA_SERVICE_URL}`);
  logger.info(`Search service running on ${process.env.SEARCH_SERVICE_URL}`);
  logger.info(`Redis URL ${process.env.REDIS_URL}`);
});
