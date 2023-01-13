/*
Given a sorted array of integers a, your task
is to determine which element of a is closest 
to all other values of a.
*/

function absoluteValuesSumMinimization(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      let dif = Math.abs(a[i] - a[j]);
      sum += dif;
    }
    arr.push(sum);
  }
  let minIndex = arr.indexOf(Math.min(...arr));
  return a[minIndex];
}

// or

function absoluteValuesSumMinimization(a) {
  let arr = a.map((el) =>
    a.reduce((acc, current) => acc + Math.abs(current - el), 0)
  );

  return a[arr.indexOf(Math.min(...arr))];
}
