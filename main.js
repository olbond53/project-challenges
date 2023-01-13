const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1]
];

minesweeper = matrix =>
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce((count, i) => {
        console.log(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]);
        return (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]));
      }, 0)
    )
  );
