function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++) {
    var orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt((Math.pow(earthRadius + arr[i].avgAlt, 3) / GM))));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbitalPeriod;
}
return arr;
}