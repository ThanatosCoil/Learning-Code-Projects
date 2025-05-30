const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const homeStyles = readFileSync("./styles.css");
const homeImage = readFileSync("./logo.svg");
const homeLogic = readFileSync("./browser-app.js");

const server = http.createServer((req, res) => {
  // Home page
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // About page
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Here is about section");
    res.end();
  }
  // Styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // Logo
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // Logic
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`
    <h1>Page not found</h1> 
    <p>Try again</p>
    <a href="/">Home</a>`);
    res.end();
  }
});

server.listen(5000);
