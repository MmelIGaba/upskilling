/**
 * @param {number} numRows
 * @return {number[][]}
 * url:
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  const res = [[1]];

  if (numRows === 1) return res;
  res.push([1, 1]);

  if (numRows === 2) return res;

  for (let i = 1; i < numRows - 1; i++) {
    const newRow = [1];
    let x = 0;

    while (x < res[i].length - 1) {
      newRow.push(res[i][x] + res[i][x + 1]);
      x++;
    }

    newRow.push(1);
    res.push(newRow);
  }

  return res;
};
var generate1 = function (numRows) {
  if (numRows === 0) return [];
  const res = [[1]]; // Initialize the first row

  for (let i = 1; i < numRows; i++) {
    const newRow = [1]; // Start each row with 1
    for (let j = 1; j < i; j++) {
      newRow.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    newRow.push(1); // End each row with 1
    res.push(newRow);
  }

  return res;
};

console.log(generate1(6));

console.log(generate(6));
