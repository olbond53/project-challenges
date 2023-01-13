function lengthOfSequence(limit) {
  let count = 0;
  do {
    if (limit % 2 === 0) {
      limit = limit / 2;
    } else {
      limit = 3 * limit + 1;
    }
    count++;
  } while (limit !== 1);
  return count;
}

function longestCollatzSequence(limit) {
  let maxLength = 0;
  let num;
  for (let i = limit; i > 1; i--) {
    let length = lengthOfSequence(i);
    if (maxLength < length) {
      maxLength = length;
      num = i;
    }
  }
  return num;
}
