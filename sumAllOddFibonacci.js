function sumFibs(num) {
    let prevNumber = 0;
    var currNumber = 1;
    let result;
    while(currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber; 
        }
         currNumber += prevNumber;
         prevNumber = currNumber - prevNumber;
    }
    return result;
 }