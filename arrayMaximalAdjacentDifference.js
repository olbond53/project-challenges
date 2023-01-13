/*Given an array of integers, find the maximal absolute
 difference between any two of its adjacent elements.*/
function arrayMaximalAdjacentDifference(inputArray) {
  let diffArr = [];
 for (let i = 0; i < inputArray.length - 1; i++) {
     let diff = inputArray[i] - inputArray[i + 1];
     if (diff < 0) {  diff = diff * -1};
     diffArr.push(diff);
 }
   return Math.max(...diffArr);
}