const cors = require("cors");

const configureCors = () => {
  return cors({
    //origin -> which origins you want to have access to use your api
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", //local dev
        "https://yourcustomdomain.com", //production domain
      ];

      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // giving permission so req can be allowed
      } else {
        callback(new Error("Not allowed by cors"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE"], // which methods you allow to use
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"], //what headers will be exposed to the client in response
    credentials: true, //enables support for cookies and authorization
    preflightContinue: false, //This option allows you to manufacture a response to preflight requests with your own middleware after the necessary headers have been set DEFAULT-false
    maxAge: 600, // cache pre flight responses for 10 mins (600 sec) -> avoid sending options request multiple time
    optionsSuccessStatus: 204,
  });
};

module.exports = { configureCors };
