//  Do the same
function avoidObstacles(inputArray) {
  var jump = 2;
  while (inputArray.some(obstacles => obstacles % jump == 0)) {
    jump++;
  }
  return jump;
}
