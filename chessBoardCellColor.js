/* Given two cells on the standard chess board, 
determine whether they have the same color or not.*/
function chessBoardCellColor(cell1, cell2) {
  let num = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let chars = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let splitCell1 = cell1.split("");
  let splitCell2 = cell2.split("");

  let index1 = num.indexOf(splitCell1[1]) + chars.indexOf(splitCell1[0]) + 2;

  let index2 = num.indexOf(splitCell2[1]) + chars.indexOf(splitCell2[0]) + 2;

  if (index1 % 2 == 0 && index2 % 2 == 0) {
    return true;
  } else if (index1 % 2 != 0 && index2 % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
