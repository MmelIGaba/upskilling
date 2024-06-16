/*
Given a string of lowercase letters in the range ascii[a-z], 
determine the index of a character that can be removed to make the string a palindrome. 
There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. 
Otherwise, return the index of a character to remove.

Example

Either remove 'b' at index  or 'c' at index .

Function Description

Complete the palindromeIndex function in the editor below.

palindromeIndex has the following parameter(s):

string s: a string to analyze
Returns

int: the index of the character to remove or 
*/
/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 * url: https://www.hackerrank.com/challenges/palindrome-index/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

// function palindromeIndex(s) {
//   // Write your code here
//   for(let i = 0; i < s.length; i++){
//     const str = s.substring(0, i) + s.substring(i+1, s.length);
//     if(str === str.split("").reverse().join(',').replaceAll(",", '')){
//       return i;
//     }
//     console.log(str, str.split("").reverse().join(',').replaceAll(",", ''))
//   }
//   return -1;
// }

const palindromeIndex = (s)=>{
  const checkPalindrome = (a,b, s)=>{
    while(a < b){
      // console.log(s[a], s[b])
      if(s[a] !== s[b]){
        return false;
      }
      a++;
      b--;
    }
    return true;
  }
  let a = 0;
  let b = s.length -1;
  while(a < b){
    if(checkPalindrome(a+1, b, s)){
      return a;
    }
    if(checkPalindrome(a, b-1, s)){
      return b;
    }
    a++;
    b--;
  }
  return -1;
}
const s = "abcdefdcba"
console.log(palindromeIndex(s))