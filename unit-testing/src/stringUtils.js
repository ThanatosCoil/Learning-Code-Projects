const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const isPalindrome = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
};

export { reverseString, capitalizeWords, isPalindrome };
