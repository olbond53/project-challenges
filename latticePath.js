function factorial(num) {
  if (num <= 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

function latticePaths(gridSize) {
  let n = gridSize * 2;

  return factorial(n) / Math.pow(factorial(gridSize), 2);
}

latticePaths(4);
