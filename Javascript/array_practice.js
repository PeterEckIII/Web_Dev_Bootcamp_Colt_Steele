function printReverse(arr) {
  reverseArr = arr.reverse();
  return reverseArr;
}

function isUniform(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}

function sumArray(arr) {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

function max(arr) {
  max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}


function myForEach(arr, func) {
  // Loop through array
  for (var i = 0; i < arr.length; i++) {
    // Call func for each item in array
    func(arr[i]);
  }
}
