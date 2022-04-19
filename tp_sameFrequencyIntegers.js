/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities.

Time: O(N)

Same Input:
    sameFrequency(182, 281) // true
    sameFrequency(34, 14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22, 222) // false
*/

let sameFrequency = (num1, num2) => {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;

  let frequencyTracker = {};
  for (let i = 0; i < num1Str.length; i++) {
    frequencyTracker[num1Str[i]]
      ? frequencyTracker[num1Str[i]]++
      : (frequencyTracker[num1Str[i]] = 1);
  }
  for (let j = 0; j < num2Str.length; j++) {
    if (frequencyTracker[num2Str[j]] > 0) {
      frequencyTracker[num2Str[j]]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
