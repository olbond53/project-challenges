function uniteUnique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arguments.length; i++) {
    let arr = arguments[i];
  
    for (let j = 0; j < arr.length; j++) {
      let elem = arr[j];
    
     if(!uniqueArr.includes(elem)) {
        uniqueArr.push(elem);
     }
     }
    }
    return uniqueArr;
  }