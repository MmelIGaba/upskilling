/*
 * Complete the 'candies' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 *  url: https://www.hackerrank.com/challenges/candies/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

function candies(n, arr) {
    // Write your code here
    let resArr = [];
    let num = 1;
    for(let i = 0; i < n - 1; i++){
      let curr = arr[i];
      let next = arr[i + 1];
      if(i = 0){
        resArr.push(num);
      }else{
        if(curr > next){
          num++;
          resArr.push(num);
        }
      }
    }
    console.log(resArr)
  //return resArr.reduce((a,b)=>a + b, 0);
}
const arr = [1, 2, 2];
console.log(candies(3, arr));