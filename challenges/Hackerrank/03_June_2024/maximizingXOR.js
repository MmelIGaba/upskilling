/*
Given two integers,  and , find the maximal value of  xor , written , where  and  satisfy the following condition:


For example, if  and , then



Our maximum value is .

Function Description

Complete the maximizingXor function in the editor below. It must return an integer representing the maximum value calculated.

maximizingXor has the following parameter(s):

l: an integer, the lower bound, inclusive
r: an integer, the upper bound, inclusive
Input Format

The first line contains the integer .
The second line contains the integer .
*/
/*
 * Complete the 'maximizingXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function maximizingXor(l, r) {
//   Write your code here
  l = l.toString(2);
  r = r.toString(2);
  const len = Math.max(r.length, l.length);
  l = l.padStart(len, "0");
  r = r.padStart(len, "0");

//   console.log(l, r);
  let result = "";
  if (r === l) {
    return 0;
  }

  for (let i = 0; i < Math.max(r.length, l.length); i++) {
    if (l[i] === r[i]) {
      result += "0";
    } else if (l[i] !== r[i]) {
      result += "1";
      break;
    }
  }
//   console.log(l, r);

//   console.log(result.padEnd(len, "1"));
  return parseInt(result.padEnd(len, "1"), 2);
}
// function maximizingXor(l, r) {
//     // Calculate the XOR of l and r
//     let xor = l ^ r;
//     console.log(xor)
//     // Find the most significant bit position where l and r differ
//     let significantBit = 0;
//     while (xor > 0) {
//       significantBit++;
//       xor >>= 1;
//     }
  
//     // The maximum XOR value is obtained by setting all bits to 1
//     // up to the most significant bit where l and r differ
//     return (1 << significantBit) - 1;
//   }
  
const l = 11;
const r = 100;
console.log(maximizingXor(l, r));
