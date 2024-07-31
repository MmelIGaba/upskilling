// /*
//  * Complete the 'climbingLeaderboard' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY ranked
//  *  2. INTEGER_ARRAY player
//  * url: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
//  */

// function climbingLeaderboard(ranked, player) {
//   // Write your code here
//   const obj = {};
//   ranked.sort((a, b) => b - a);
//   const arr = Array.from(new Set(ranked));
//   //   console.log(ranked);
//   let r = 1;
//   for (let i of ranked) {
//     // console.log(i);
//     if (!obj[i]) {
//       obj[i] = r;
//       r++;
//     }
//     // console.log(obj);
//   }
//   const res = [];
//   let x = 0;
//   for (let i = 0; i < player.length; i++) {
//     if (obj[player[i]]) {
//       res.push(obj[player[i]]);
//       continue;
//     }
    
//     for (let y in obj) {
//       y = Number(y);
//       console.log(y)
//       if (player[i] <= y ) {
//         res.push(obj[y]);
//         break;
//       }
//     }
//     console.log(obj[player[i]] > arr[0], obj[player[i]] > arr[0]);
//     if (obj[player[i]] > arr[0]) {
//       console.log(obj[player[i]]);
//       res.push(1);
//     }
//   }
//   console.log(obj, res);
//   return [6, 4, 2, 1];
// }
// const ranked = [100, 90, 90, 80, 70];
// const player = [70, 80, 105];
// console.log(climbingLeaderboard(ranked, player));
function climbingLeaderboard(ranked, player) {
    const uniqueRanks = [...new Set(ranked)];
  
    const result = [];
  
    let rankIndex = uniqueRanks.length - 1;
  
    for (let i = 0; i < player.length; i++) {
      while (rankIndex >= 0 && player[i] >= uniqueRanks[rankIndex]) {
        rankIndex--;
      }
      result.push(rankIndex + 2);
    }
  
    return result;
  }
  
  const ranked = [100, 90, 90, 80, 70];
  const player = [70, 80, 105];
  console.log(climbingLeaderboard(ranked, player)); // Output: [4, 3, 1]