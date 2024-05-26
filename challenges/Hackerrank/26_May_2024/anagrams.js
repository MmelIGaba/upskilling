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
  if (s.length % 2 !== 0) {
    return -1;
  }

  const halfLen = s.length / 2;

  let [str1, str2] = [s.substring(0, halfLen), s.substring(halfLen)];

  let count = 0;

  const charCount = {};
  for (let i = 0; i < str2.length; i++) {
    charCount[str2[i]] = (charCount[str2[i]] || 0) + 1;
  }
  for (let i = 0; i < halfLen; i++) {
    if (charCount[str1[i]] > 0) {
      charCount[str1[i]]--;
    } else {
      count++;
    }
  }

  return count;
}
// function anagram(s) {
//   // Write your code here
//   let halfLen = s.length;
//   if (halfLen % 2 !== 0) {
//     return -1;
//   }

//   halfLen /= 2;
//   let [str1, str2, count] = [
//     s.substring(0, halfLen),
//     s.substring(halfLen, halfLen * 2),
//     0,
//   ];
  
//   for (let i = 0; i < halfLen; i++) {
//     if (!str2.includes(str1[i])) {
//       count++;
//       continue;
//     }
//   }
//   console.log(str1, "___", str2);
//   return count;
// }
console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
console.log(anagram("mnop"));
console.log(anagram("xyyx"));
console.log(anagram("xaxbbbxx"));
console.log();
console.log(anagram("asdfjoieufoa"));
console.log(anagram("fdhlvosfpafhalll")); //
console.log(anagram("mvdalvkiopaufl"));
