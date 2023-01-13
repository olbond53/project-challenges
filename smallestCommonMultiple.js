function smallestCommons(arr) {
    arr.sort((a,b) => b-a)
     let newArr = [];
    for (let i = arr[0] ; i >= arr[1]; i--) {
       newArr.push(i);
    }
    
    let lcm = newArr[0];
    for(let i = 1; i < newArr.length; i++) {
      let GCD = gcd(lcm, newArr[i]);
      lcm = (lcm * newArr[i]) / GCD;  
    }
    return lcm;
    function gcd(x,y) {
      if(y === 0) {
        return x;
      } else {
        return gcd(y, x%y);
      }
    } 
  }
  