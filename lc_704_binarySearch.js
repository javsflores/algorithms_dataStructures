/*
Leetcode 704. Binary Search
Link: https://leetcode.com/problems/binary-search/submissions/

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

function binarySearch(nums, target) {
  if (nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let checkpoint = Math.floor((start + end) / 2);
    if (target === nums[checkpoint]) {
      return checkpoint;
    } else if (target > nums[checkpoint]) {
      start = checkpoint + 1;
    } else {
      end = checkpoint - 1;
    }
  }
  return -1;
}

console.log(binarySearch([5], 5)); // 0
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
