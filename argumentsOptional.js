function addTogether() {
  if (arguments.length > 1) {
    if ((typeof arguments[0] && typeof arguments[1]) === 'number') {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  } else {
    let arg1 = arguments[0];
    if (typeof arg1 === 'number') {
      return function (arg2) {
        if (typeof arg2 === 'number') {
          return arg1 + arg2;
        } else {
          return undefined;
        }
      };
    }
  }
}
