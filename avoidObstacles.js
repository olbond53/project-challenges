/*You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right.
 You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.*/
function avoidObstacles(inputArray) {
  for (let i = 1; i < Math.max(...inputArray) + 2; i++) {
    var num = 0;
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] % i !== 0) {
        num++;
      }
    }
    if (num === inputArray.length) {
      var min = i;
      break;
    }
  }
  return min;
}
