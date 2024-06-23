/*
Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

Example

Either remove 'b' at index  or 'c' at index .

Function Description

Complete the palindromeIndex function in the editor below.

palindromeIndex has the following parameter(s):

string s: a string to analyze
Returns

int: the index of the character to remove or -1
url: https://www.hackerrank.com/challenges/palindrome-index/problem
*/
/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
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
  /*
  Inside the loop, there are two main checks performed using the checkPalindrome function:
First Check (checkPalindrome(a+1, b, s)):
This checks if the substring s[a+1] to s[b] is a palindrome if we skip the character at index a.


If checkPalindrome(a+1, b, s) returns true, it means that excluding s[a] makes the string a palindrome, 
so a is returned as the palindrome index.
Second Check (checkPalindrome(a, b-1, s)):
This checks if the substring s[a] to s[b-1] is a palindrome if we skip the character at index b.
If checkPalindrome(a, b-1, s) returns true, it means that excluding s[b] makes the string a palindrome, 
so b is returned as the palindrome index.
*/