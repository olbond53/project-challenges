function specialPythagoreanTriplet(n) {
  //let sumOfabc = n;
  let product;
  let a, b, c;
  for (a = 1; a < n / 2 - 1; a++) {
    for (b = 2; b < n / 2; b++) {
      c = n - a - b;
      if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
        product = a * b * c;
      }
    }
  }

  return product;
}
