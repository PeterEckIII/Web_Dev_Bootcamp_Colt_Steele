function isEven(x) {
  if(x % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function isFactorial(x) {
  var result = x;
  if (x === 0 || x === 1) {
    return 1;
  }
  else {
    while (x > 1) {
      x--;
      result *= x;
    }
  }
  return result;
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
