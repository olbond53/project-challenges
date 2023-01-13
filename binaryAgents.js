//return string from binary
function binaryAgent(str) {
  let biStr = str.split(' ');
  let uniStr = [];
  for (let i = 0; i < biStr.length; i++) {
    uniStr.push(String.fromCharCode(parseInt(biStr[i], 2)));
  }
  return uniStr.join('');
}
