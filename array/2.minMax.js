const minMax = (array, i) => {
  array.sort((a, b) => a > b);
  return { min: array[i - 1], max: array[array.length - i] };
};

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 5, 10, 4, 2, 6];
console.log(minMax(array2, 3));
