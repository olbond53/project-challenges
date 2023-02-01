// 2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2**exponent?

function powerDigitSum(exponent) {
  const powNumberArr = BigInt(Math.pow(2, exponent)).toString().split('');

  const sum = powNumberArr.reduce((acc, cur) => acc + parseInt(cur), 0);
  return sum;
}

powerDigitSum(15);
