function largestPalindromeProduct(n) {
  let right = Math.pow(10, n) - 1;
  let left = Math.pow(10, n - 1);
  let max = 0;
  for (let i = right; i >= left; i--) {
    for (let j = right; j >= left; j--) {
      let product = i * j;
      if (isPalindrome(product) && product > max) {
        max = product;
        break;
      }
    }
  }
  return max;
  function isPalindrome(number) {
    let num = number.toString().split('').reverse().join('');
    return parseInt(num) === number;
  }
}
