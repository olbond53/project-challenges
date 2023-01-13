/*Given a string, your task is to replace each of its
 characters by the next one in the English alphabet; 
 i.e. replace a with b, replace b with c, etc (z would 
  be replaced by a). */
function alphabeticShift(inputString) {
  let char;
  let str = "";
  for (i = 0; i < inputString.length; i++) {
    char = inputString.charCodeAt(i) + 1;
    if (char == 123) {
      char = char - 26;
    }
    str = str + String.fromCharCode(char);
  }
  return str;
}
