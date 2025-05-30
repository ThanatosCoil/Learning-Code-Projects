const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
      <h1>Welcome to our home page</h1>
      <a href="/about">About page</a>
      `);
    return;
  }
  if (req.url === "/about") {
    res.end("Here is about section");
    return;
  }
  res.end(`
    <h1>No such address </h1>
    <p>Try again</p>
    <a href="/">Home</a>`);
  return;
});

server.listen(5000);
