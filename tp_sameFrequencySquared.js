/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.

Example
  same([1,2,3], [4,1,9]) returns true
  same([1,2,3], [1,9]) returns false
  same([1,2,1], [4,4,1]) returns false
*/

// Brute Force
let same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let arr2Obj = {};
  for (let i = 0; i < arr2.length; i++) {
    arr2Obj[arr2[i]] ? arr2Obj[arr2[i]]++ : (arr2Obj[arr2[i]] = 1);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr2Obj[Math.pow(arr1[i], 2)] >= 1) {
      arr2Obj[Math.pow(arr1[i], 2)]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3, 3], [4, 1, 9, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
