/*
find out if the given string satisfies the IPv4 address naming rules.
*/
function isIPv4Address(inputString) {
  let inputArray = inputString.split('.');
  if(inputArray.length === 4) {
   return inputArray.every(x => ( x.length > 0) && ((x >= 0) && (x <= 255)) );}
   else {return false};
}
