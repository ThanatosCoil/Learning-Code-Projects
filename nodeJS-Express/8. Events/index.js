const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data received`);
});

customEmitter.on("response", (name, id) => {
  console.log(`other logic with ${name} and ${id}`);
});

customEmitter.emit("response", "John", 35);
