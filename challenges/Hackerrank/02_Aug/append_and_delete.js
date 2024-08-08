/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 * url: https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

function appendAndDelete(s, t, k) {
  // Write your code here
  let i = s.length - 1;
  let j = t.length - 1;

  let count = 0;

  if(t.length > 0 && t !== s.slice(s.length - t.length, s.length)){
    console.log(s.slice(s.length - t.length, s.length));

    while(s[i] !== t[j] && t.length > 0){
      t.pop()
      count++;
    }
  }
  if(t.length > )
  console.log(count, t)
  if (count === k) {
    return "Yes";
  } else {
    return "No";
  }
}

const s = ["a", "b", "c"];
const t = ["f", "e", "d"];
const k = 6;
console.log(appendAndDelete(s, t, k)); // "No"
