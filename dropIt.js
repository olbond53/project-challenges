function dropElements(arr, func) {
    let times = arr.length;
    for (let i = 0; i < times; i++) {
     if(func(arr[0])) {
     break;   
     } else {
       arr.shift();
     }
     }
     return arr;
  }