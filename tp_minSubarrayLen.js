/*
Write a function call minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Example:

minSubarrayLen([2, 3, 1, 2, 4, 3], 7); // 2
minSubarrayLen([2, 1, 6, 5, 4], 9); // 2
minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
*/

function minSubarrayLen(arr, int) {
  let leftPointer = 0;
  let rightPointer = 1;
  let currentSum = arr[0];
  let finalSubarray = [];
  let currentSubarray = [arr[0]];
  if (arr[0] === int) return currentSubarray;
  while (leftPointer !== rightPointer) {
    if (currentSum < int && rightPointer < arr.length) {
      currentSubarray.push(arr[rightPointer]);
      currentSum += arr[rightPointer];
      rightPointer++;
    } else if (currentSum >= int) {
      let removedValue = currentSubarray.shift();
      currentSum -= removedValue;
      leftPointer++;
    } else {
      leftPointer++;
    }
    if (
      currentSum >= int &&
      (currentSubarray.length < finalSubarray.length ||
        finalSubarray.length === 0)
    ) {
      finalSubarray = currentSubarray.slice();
    }
  }
  return finalSubarray.length;
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
