function sumSquareDifference(n) {
  function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + Math.pow(i, 2);
    }
    return sum;
  }
  function squareOfSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return Math.pow(sum, 2);
  }
  return squareOfSum(n) - sumOfSquares(n);
}
