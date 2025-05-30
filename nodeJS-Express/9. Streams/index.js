const { createReadStream } = require("fs");

const stream = createReadStream("./big.txt", {
  highWaterMark: 90000, // Изначально чанк по размеру которого делятся данные 64кб
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
