// Find Union and Intersection
// of two unsorted arrays

const find = (arrayOne, arrayTwo) => {
  let union = [];
  let intersection = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (!union.includes(arrayOne[i])) {
      union.push(arrayOne[i]);
    }
    if (!intersection.includes(arrayOne[i]) && arrayTwo.includes(arrayOne[i])) {
      intersection.push(arrayOne[i]);
    }
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    if (!union.includes(arrayTwo[j])) {
      union.push(arrayTwo[j]);
    }
  }
  return {
    union: union,
    intersection: intersection,
  };
};

let array1 = [7, 1, 5, 2, 3, 6];
let array2 = [3, 8, 6, 20, 7];
console.log(find(array1, array2));
