function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMult(n) {
  let smallestMultiple = 1;
  for (let i = 2; i <= n; i++) {
    smallestMultiple = lcm(smallestMultiple, i);
  }
  return smallestMultiple;
}
