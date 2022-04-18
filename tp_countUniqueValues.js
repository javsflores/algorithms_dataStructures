/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

Example
    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4

*/

// Brute Force
let countUniqueValues = (valuesArr) => {
  if (valuesArr.length === 0) return 0;
  let uniqueValue = 0;
  let currentIndex = 1;
  while (currentIndex < valuesArr.length) {
    if (valuesArr[uniqueValue] !== valuesArr[currentIndex]) {
      uniqueValue++;
      valuesArr[uniqueValue] = valuesArr[currentIndex];
    }
    currentIndex++;
  }
  return uniqueValue + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
