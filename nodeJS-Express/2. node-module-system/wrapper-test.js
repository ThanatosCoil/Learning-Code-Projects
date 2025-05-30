const wrapperExplorer = require("./wrapper-explorer");

console.log(`in wrapper-test.js file`);

console.log("__filename in test file", __filename);
console.log("__dirname in test file", __dirname);

wrapperExplorer.greet("Mikhail");
