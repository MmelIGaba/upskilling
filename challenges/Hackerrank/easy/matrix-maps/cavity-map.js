// 10 September 2024 - Wits Undergrad lab
// start - 19:17

/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 * url: https://www.hackerrank.com/challenges/cavity-map/problem?isFullScreen=true
 */

function cavityMap(grid) {
    const n = grid.length;
  
    // Convert the grid from array of strings to array of arrays of characters for easier manipulation
    grid = grid.map(row => row.split(''));
  
    // Iterate through each cell except the border cells
    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
        let curr = grid[i][j];
        let top = grid[i - 1][j];
        let bottom = grid[i + 1][j];
        let left = grid[i][j - 1];
        let right = grid[i][j + 1];
  
        // Check if the current cell is a cavity
        if (curr > top && curr > bottom && curr > left && curr > right) {
          grid[i][j] = 'X';
        }
      }
    }
    console.log("\n", grid, "\n")
    // Convert the grid back to an array of strings
    grid = grid.map(row => row.join(''));
  
    return grid;
  }
  

const grid = ["989", "191", "111"];
const grid1 = ["1112", "1912", "1892", "1234"];
// console.log(cavityMap(grid));
// console.log(cavityMap(grid1));
cavityMap(grid1).forEach(element => {
    console.log(element)
});
