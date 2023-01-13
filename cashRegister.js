function checkCashRegister(price, cash, cid) {
  //finding the difference between price and cash
  let diff = cash - price;

  //declaring the return object
  let objChange = {
    status: undefined,
    change: []
  };

  //array with the face value of each unit
  let unitFaceValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  // finding the sum of cash in the cash register
  let sumOfCash = function(arr) {
    let sum = 0;
    for (let val in arr) {
      sum += arr[val][1];
    }
    return sum;
  };
  // finding the change
  function giveMeChange() {
    if (diff > sumOfCash(cid)) {
      objChange.status = "INSUFFICIENT_FUNDS";

      return objChange;
    } else if (diff == sumOfCash(cid)) {
      objChange.status = "CLOSED";
      objChange.change = cid;
      return objChange;
    } else {
      let count = 0;
      let arr = [];
      for (let i = unitFaceValue.length - 1; i >= 0; i--) {
        if (diff >= unitFaceValue[i][1]) {
          while (diff >= unitFaceValue[i][1] && cid[i][1] > 0) {
            count += unitFaceValue[i][1];
            diff = Math.round((diff - unitFaceValue[i][1]) * 1000) / 1000;
            cid[i][1] =
              Math.round((cid[i][1] - unitFaceValue[i][1]) * 1000) / 1000;
          }

          objChange.status = "OPEN";
          arr.push(unitFaceValue[i][0]);
          arr.push(count);
          objChange.change.push(arr);
          count = 0;
          arr = [];
        }
      }
      if (count < diff) {
        objChange.status = "INSUFFICIENT_FUNDS";
        objChange.change = [];
      }
      return objChange;
    }
  }
  return giveMeChange();
}
