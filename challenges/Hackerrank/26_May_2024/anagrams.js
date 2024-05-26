/*

Two words are anagrams of one another if their letters can be rearranged to form the other word.

Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

Example

Break  into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

Function Description

Complete the anagram function in the editor below.

anagram has the following parameter(s):

string s: a string
Returns

int: the minimum number of characters to change or -1.

 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
  // Write your code here
  let halfLen = s.length;
  if (halfLen % 2 !== 0) {
    return -1;
  }

  halfLen /= 2;
  let [str1, str2, count] = [
    s.substring(0, halfLen).split(""),
    s.substring(halfLen, halfLen * 2).split(""),
    0,
  ];
  str1.sort();
  str2.sort();
  for (let i = 0; i < halfLen; i++) {
    if (str1[i] === str2[i]) {
      continue;
    }
    count++;
  }
  return count;
}
console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
console.log(anagram("mnop"));
console.log(anagram("xyyx"));
console.log(anagram("xaxbbbxx"));
console.log();
console.log(anagram("asdfjoieufoa"));
console.log(anagram("fdhlvosfpafhalll"));
console.log(anagram("mvdalvkiopaufl"));
