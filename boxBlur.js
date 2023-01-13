/*
The pixels in the input image are represented as integers.
The algorithm distorts the input image in the following way:
Every pixel x in the output image has a value equal to the average 
value of the pixel values from the 3 × 3 square that has its center 
at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.
*/
function boxBlur(image) {
  let newImage = [];
  let sum = 0;
  let nRows = image.length - 2;
  let nColumns = image[0].length - 2;

  for (let r = 0; r < nRows; r++) {
    let arr = [];
    for (let c = 0; c < nColumns; c++) {
      for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
          sum += image[i][j];
        }
      }
      arr.push(Math.floor(sum / 9));
      sum = 0;
    }
    newImage.push(arr);
  }
  return newImage;
}
