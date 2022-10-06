const minMax = (array) => {
  let min = (max = array[0]);
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return { min, max };
};

const minMaxRecursion = (array, k, left = 0, right = array.length - 1) => {
  let min, max;
  if (left == right) {
    min = array[left];
    max = array[left];
    return { min, max };
  }
  //   if (left + 1 == right) {
  //     if (array[left] > array[right]) {
  //       min = array[right];
  //       max = array[left];
  //     } else {
  //       min = array[left];
  //       max = array[right];
  //     }
  //     return { min, max };
  //   }
  let mid = parseInt((left + right) / 2);
  let smallMin = minMaxRecursion(array, k, left, mid);
  let smallMax = minMaxRecursion(array, k, mid + 1, right);
  if (smallMin.min < smallMax.min) {
    min = smallMin.min;
  } else {
    min = smallMax.min;
  }
  if (smallMin.max > smallMax.min) {
    max = smallMin.max;
  } else {
    max = smallMax.max;
  }
  return { min, max };
};

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 5, 10, 4, 2, 6];
console.log(minMaxRecursion(array2));
