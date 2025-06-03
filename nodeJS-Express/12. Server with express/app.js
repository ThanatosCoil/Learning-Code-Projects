const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("../public"));

/* 
Так делают редко, либо будет подгружаться через static из папки. 
Либо через SSR

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
}); */

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
