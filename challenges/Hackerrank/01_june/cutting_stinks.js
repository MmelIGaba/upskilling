/*
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, 
cut that length from each of the longer sticks and then discard all the pieces of that shortest length. 
When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

*/
/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * url: https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true
 */

function cutTheSticks(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let len = arr.length;
  const lengthsAtEachIteration = [];
  for (let i = 0; i < len; i++) {
    lengthsAtEachIteration.push(arr.filter((x) => x > 0).length);
    arr = arr.map((j) => j - arr[i]);
    if (lengthsAtEachIteration[lengthsAtEachIteration.length - 1] === 1) {
      break;
    }
  }
  return Array.from(new Set(lengthsAtEachIteration)).filter((a) => a !== 0);
}
const arr = "8 8 14 10 3 5 14 12".split(" ");
console.log(cutTheSticks(arr));
//done, 