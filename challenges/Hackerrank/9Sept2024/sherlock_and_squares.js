/*
  Complete the 'squares' function below.
 
  The function is expected to return an INTEGER.
  The function accepts following parameters:
   1. INTEGER a
   2. INTEGER b
   url: https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true
 */

function squares(a, b) {
  // Write your code here
  let squareRootA = Math.ceil(Math.sqrt(a));
  let squareRootB = Math.floor(Math.sqrt(b));
  return Math.max(0, squareRootB - squareRootA + 1);
}
console.log(squares(3, 9));
console.log(squares(17, 24));
console.log(squares(35, 70));
console.log(squares(100, 1000));
