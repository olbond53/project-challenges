// Reverse the order of the bits in a given integer.

function mirrorBits(a) {
  let str = a.toString(2);
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr.concat(str[i]);
  }
  return Number.parseInt(newStr, 2);
}
