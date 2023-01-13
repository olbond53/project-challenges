/*a function deepEqual that takes two values and returns true only
 if they are the same value or are objects with the same properties,
 where the values of the properties are equal when compared with a 
 recursive call to deepEqual */
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    obj1 == null ||
    typeof obj1 != "object" ||
    obj2 == null ||
    typeof obj2 != "object"
  ) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
