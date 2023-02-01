function factorial(num) {
  if (num <= 2) {
    return num;
  } else {
    return BigInt(num) * factorial(BigInt(num) - BigInt(1));
  }
}

function latticePaths(gridSize) {
  let n = gridSize * 2;

  return factorial(n) / Math.pow(factorial(gridSize), 2);
}

latticePaths(4);
