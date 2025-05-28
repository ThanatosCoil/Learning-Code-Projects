function flattenArray(arr) {
  // Base case: if the input is not an array, return it as is
  if (!Array.isArray(arr)) {
    return arr;
  }

  // Use reduce to flatten the array
  return arr.reduce((acc, current) => {
    // If the current element is an array, recursively flatten it
    if (Array.isArray(current)) {
      return acc.concat(flattenArray(current));
    } else {
      // Otherwise, add the current element to the accumulator
      return acc.concat(current);
    }
  }, []); // Start with an empty array as the initial accumulator
}

const intersection = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

export { flattenArray, intersection, removeDuplicates };
