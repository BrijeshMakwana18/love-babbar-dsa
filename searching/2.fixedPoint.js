// Find a Fixed Point (Value equal to index) in a given array

const fixedPoint = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i == arr[i]) {
      return i;
    }
  }
  return -1;
};

let arr = [-10, -5, 0, 3, 7];
console.log(fixedPoint(arr));
