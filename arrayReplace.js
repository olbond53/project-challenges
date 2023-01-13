/* Given an array of integers, replace all the 
occurrences of elemToReplace with substitutionElem*/
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((el) => {
    if (el == elemToReplace) {
      return (el = substitutionElem);
    } else {
      return el;
    }
  });
}
