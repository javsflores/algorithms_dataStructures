/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples
    isSubsequence("hello", "hello world") // true
    isSubsequence("sing", "sting") // true
    isSubsequence("abc", "abracadabra") // true
    isSubsequence("abc", "acb") // false (order matters)
*/

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) {
    return false;
  }
  let start1 = 0;
  let start2 = 0;
  while (start1 < str1.length && start2 < str2.length) {
    if (str1[start1] === str2[start2]) {
      start1++;
      start2++;
    } else {
      start2++;
    }
  }
  return start1 === str1.length ? true : false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
