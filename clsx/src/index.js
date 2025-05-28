import clsx from "clsx";

//Basic usage
const buttonClasses = clsx("btn", "btn-primary");
console.log(buttonClasses); // "btn btn-primary"

let isPrimary = false;
const primaryButtonClasses = clsx("btn", isPrimary && "btn-primary");
console.log(primaryButtonClasses); // "btn"

isPrimary = true;
const classes = clsx(["btn", "btn-primary", isPrimary && "active"]);
console.log(classes); // "btn btn-primary active"

isPrimary = false;
const isDisabled = true;
const classesVariable = clsx({
  btn: true,
  "btn-primary": isPrimary, // не будет добавлено, так как isPrimary = false
  disabled: isDisabled,
});
console.log(classesVariable); // "btn disabled"
