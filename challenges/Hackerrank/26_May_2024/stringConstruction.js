/*

Amanda has a string of lowercase letters that she wants to copy to a new string. 
She can perform the following operations with the given costs. She can perform them any number of times to construct a new string :

Append a character to the end of string  at a cost of  dollar.
Choose any substring of  and append it to the end of  at no charge.
Given  strings , find and print the minimum cost of copying each  to  on a new line.

For example, given a string , it can be copied for  dollars. Start by copying ,  
and  individually at a cost of  dollar per character. String  at this time. Copy  to the end of  at no cost to complete the copy.

Function Description

Complete the stringConstruction function in the editor below. It should return the minimum cost of copying a string.

stringConstruction has the following parameter(s):

s: a string
Input Format

The first line contains a single integer , the number of strings.
Each of the next  lines contains a single string, .

Constraints

 * Complete the 'stringConstruction' function below.
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

// function stringConstruction(s) {
//   // Write your code here
//   let newStr = s[0];
//   for (let i = 1; i < s.length; i++) {
//     newStr += s[i];
//     if (newStr !== s.substring(i + 1, newStr.length)) {
//       i = newStr.length;
//     }
//   }
//   console.log("\n", newStr, "\n", s);
//   return newStr.length;
// }
function stringConstruction(s) {
  let uniqueChars = new Set(s);

  return uniqueChars.size;
}

// Test the function with an example string
console.log(stringConstruction("abababab")); // Output should be 2
