/*
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. 
In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, 
but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. 
She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions
 required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may not be of the same length, determine the minimum number of character deletions 
required to make  and  anagrams. Any characters can be deleted from either of the strings.

Example.

The only characters that match are the 's so we have to remove  from  and  from  for a total of  deletions.

Function Description

Complete the makingAnagrams function in the editor below.

makingAnagrams has the following parameter(s):

string s1: a string
string s2: a string
Returns

int: the minimum number of deletions needed
*/
/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 * url: https://www.hackerrank.com/challenges/making-anagrams/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

function makingAnagrams(s1, s2) {
  // Write your code here
}
const s1 = "abc";
const s2 = "amnop";
console.log(makingAnagrams(s1, s2))