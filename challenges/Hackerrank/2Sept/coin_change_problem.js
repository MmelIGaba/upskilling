/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 * url: https://www.hackerrank.com/challenges/coin-change/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

function getWays(n, c) {
  // Write your code here
  const lessThanC = c.filter((a) => a <= n);
  let count = 0;
  for (let i = 0; i < c.lessThanC; i++) {
    for (let j = 0; j < c.lessThanC; j++) {
      if (c[i] + c[j] === n) {
        count += 1;
      }
    }
  }
  return [count, lessThanC];
}

console.log(getWays(3, [1, 2, 3]));
console.log(getWays(10, [2, 5, 3, 6]));
