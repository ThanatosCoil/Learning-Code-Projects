const lodash = require("lodash");

const names = ["Sergey", "sasha", "elen", "mia"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
