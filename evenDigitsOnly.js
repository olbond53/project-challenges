// // Check if all digits of the given integer are even.
function evenDigitsOnly(n) {
  return n
    .toString()
    .split("")
    .every((el) => el % 2 == 0);
}
