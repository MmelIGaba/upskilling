/*
have the function StringReduction(str) take the str parameter being 
passed and return the smallest number you can get through the 
following reduction method. The method is: Only the letters a, b, 
and c will be given in str and you must take two different adjacent 
characters and replace it with the third. For example "ac" can be 
replaced with "b" but "aa" cannot be replaced with anything. This 
method is done repeatedly until the string cannot be further 
reduced, and the length of the resulting string is to be outputted. 
For example: if str is "cab", "ca" can be reduced to "b" and you get 
"bb" (you can also reduce it to "cc"). The reduction is done so the 
output should be 2. If str is "bcab", "bc" reduces to "a", so you 
have "aab", then "ab" reduces to "c", and the final string "ac" is 
reduced to "b" so the output should be 1.

PROBLEM:
- "abc" 
- we want to turn 2 different letters into a letter missing letter within "abc"
- if we get 2 similar letters we leave them as is.
- do this until it's either 1 or 2 or more similar letters & return length

PSEUDOCODE:

- create helper function to determine which third character to replace curr pair with:
  - check if first & second character are the same and return nothing / null
  - otherwise return third missing character
- iterate over the initial str:
  - initialize var called myReplacement and assign helper function invocation  (we'll either have a letter or the null)
  - if myReplacement returns a value we replace curr chars with it 
  - otherwise we leave chars as they are

*/
"abca";
function StringReduction(s) {
  const swapLetter = (first, second) =>
    first === second ? null : "abc".replace(first, "").replace(second, "");

  let isReplaced = true;

  while (isReplaced) {
    isReplaced = false; 
    for (let i = 0; i < s.length - 1; i++) {
      let curr = s[i],
        next = s[i + 1];
      const myReplacement = swapLetter(curr, next);
      if (myReplacement) {
        s = s.slice(0, i) + myReplacement + s.slice(i + 2);
        isReplaced = true;
        break; 
      }
    }
  }
  return s.length;
}

// Example usage
console.log(StringReduction("babcbbaabcbcbcbaabbccaacccbbbcaaacabbbbaaaccbcccacbbccaccbbaacaccbabcaaaacaccacbaacc")); // Output: 1
console.log(StringReduction("abcbac")); // Output: 2

console.log(StringReduction("bcab")); // 1
// console.log(StringReduction("cccc")) // 4
// console.log(StringReduction("cab")) // 2
const fs = require('fs');

// Function to read file line by line and store each line as an element in an array
function readLinesToArray(filePath) {
  try {
    // Read the file content as a string
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Split the content by newline characters to create an array of lines
    const linesArray = fileContent.split('\n');
    
    // Return the array of lines
    return linesArray;
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
}

// Example usage
const lines = readLinesToArray('a.txt');
lines.forEach((i)=>i.replace("\r", ""))
console.log(lines); // Output the array of lines
