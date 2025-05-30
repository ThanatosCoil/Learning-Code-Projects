const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

// static assets
app.use(express.static("./15. Methods/methods-public"));

//parse form data (req.body)
app.use(express.urlencoded({ extended: false }));

//parse json Без этого у нас нет доступа к тому что мы сабмитим
app.use(express.json());

//express routes
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
