/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
  // Write your code here
  //console.log((m + s - 1), Math.floor((m + s - 1)/n))
  return m + s - 1 < n ? n - (m + s - 1) :0;
}

console.log(saveThePrisoner(3, 7, 3)); // 3
console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); // 6
