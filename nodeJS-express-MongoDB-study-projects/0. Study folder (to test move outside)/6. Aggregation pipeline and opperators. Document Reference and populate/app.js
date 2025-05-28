require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

//import routes
const productRoutes = require("./routes/product");
const bookRoutes = require("./routes/book");

//middleware
app.use(express.json());

//use routes
app.use("/products", productRoutes);
app.use("/reference", bookRoutes);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
