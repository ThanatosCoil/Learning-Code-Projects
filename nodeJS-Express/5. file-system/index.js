const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
//sync way
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello nodeJS");
console.log("File created");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File content:", readContentFromFile);

fs.appendFileSync(filePath, "\nthis is a new line added to the file");
console.log("new file content added");

//async way
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello async node JS", (err) => {
  if (err) throw err;
  console.log("Async file created");

  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\nThis is another line added", (err) => {
      if (err) throw err;
      console.log("New line added to async file");
    });
  });
});
