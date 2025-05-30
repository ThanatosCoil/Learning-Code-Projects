const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res

// Так добавим всем
app.use([logger, authorize]);

//Добавляем по пути
// app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

//Так добавим отдельному
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);

  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
