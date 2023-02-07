// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits n!

function sumFactorialDigits(n) {
  function factorial(num) {
    if (num <= 1) {
      return num;
    } else {
      return BigInt(num) * factorial(BigInt(num) - BigInt(1));
    }
  }
  const factorialDigitArr = BigInt(factorial(n)).toString().split('');
  const sum = factorialDigitArr.reduce((acc, cur) => acc + parseInt(cur), 0);
  return sum;
}

sumFactorialDigits(50);
