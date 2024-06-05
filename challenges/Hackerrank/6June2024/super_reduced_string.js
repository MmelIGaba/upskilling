/*
Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. 
If the final string is empty, return Empty String

Example.


aab shortens to b in one operation: remove the adjacent a characters.


Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.

Function Description

Complete the superReducedString function in the editor below.

superReducedString has the following parameter(s):

string s: a string to reduce
Returns

string: the reduced string or Empty String
*/
/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
    url: https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
*/

function superReducedString(s) {
  // Write your code here
  const empty = "Empty string";
  if (s.length === 1) {
    return empty;
  }
  for (let i = 0; i < s.length; i++) {
    const [a, b] = [s[i], s[i + 1]];
    if (a === b) {
    //   console.log(s.slice(i, i + 2));
    //   s = s.slice(i, i + 2);
    //   s = "  "+ s;
    s = "  " + s.replace(a+b, '');
    }
  }
  return s.trim().length === 0 ? empty: s.trim();
}
const s = "abba"; // "Empty string"
const s1 = "aab"; // b
const s2 = "a"; // "Empty string"
console.log(superReducedString(s));
console.log(superReducedString(s1));
console.log(superReducedString(s2));
