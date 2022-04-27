/*
Leetcode 35. Search Insert Position
Link: https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midPoint = Math.floor((left + right) / 2);
    if (target === nums[midPoint]) {
      return midPoint;
    } else if (target > nums[midPoint]) {
      left = midPoint + 1;
    } else {
      right = midPoint - 1;
    }
  }
  return target > nums[left] ? left + 1 : left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
