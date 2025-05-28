require("dotenv").config();
const express = require("express");
const { configureCors } = require("./config/corsConfig");
const {
  requestLogger,
  addTimeStamp,
} = require("./middleware/customMiddleware");
const { globalErrorHandler } = require("./middleware/errorHandler");
const {
  urlVersion,
  headerVersion,
  contentTypeVersion,
} = require("./middleware/apiVersion");
const { createBasicRateLimiter } = require("./middleware/rateLimiting");
const itemRoutes = require("./routes/item-routes");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(createBasicRateLimiter(100, 15 * 60 * 1000)); //100 request per 15 minutes
app.use(express.json());

//routes
app.use(urlVersion("v1"));
app.use("/api/v1", itemRoutes);

//errors
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
