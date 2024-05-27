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


 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
    if(s === s.split('').reverse().join().replaceAll(',', '')){
        return -1;
    }
    return 'op';
}console.log(palindromeIndex('aba'))