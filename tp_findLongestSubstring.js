/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

Example:
findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
*/

function findLongestSubstring(str) {
  if (str.length === 0 || str.length === 1) return str.length;
  let letterDictionary = {};
  let start = 0;
  let end = 0;
  let longestLength = 0;
  let currentLength = 0;
  while (end < str.length) {
    if (!letterDictionary[str[end]]) {
      letterDictionary[str[end]] === 0
        ? letterDictionary[str[end]]++
        : (letterDictionary[str[end]] = 1);
      end++;
      currentLength++;
    } else if (letterDictionary[str[end]] >= 1) {
      letterDictionary[str[start]]--;
      start++;
      currentLength--;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }
  return longestLength;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
