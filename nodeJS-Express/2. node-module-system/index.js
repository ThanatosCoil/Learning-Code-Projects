// NodeJS модули как в Реакте компоненты, просто делят код по частям
//module.exports -> export Экспортируем функциональность
//require -> import Импортируем где требуется
//__dirname - path to current directory
//__filename - file name
//module - info about current module (file)
//process - info about env where the program is being executed
const firstModule = require("./first-module");

console.log(firstModule.add(2, 6));

try {
  console.log("divide by zero");
  let res = firstModule.divide(0, 10);
  console.log(res);
} catch (error) {
  console.log("Error", error);
}

// module wrapper
// (
//     function (exports,require, module, __filename, __dirname) {
//         //Your module code goes here
//     }
// )
