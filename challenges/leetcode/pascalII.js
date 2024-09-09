var getRow = function (rowIndex) {
  const res = [[1]];
  res.push([1, 1]);

  for (let i = 1; i < rowIndex; i++) {
    const newRow = [1];
    let x = 0;

    while (x < res[i].length - 1) {
      newRow.push(res[i][x] + res[i][x + 1]);
      x++;
    }

    newRow.push(1);
    res.push(newRow);
  }

  return res[rowIndex];
};

console.log(getRow(4));
