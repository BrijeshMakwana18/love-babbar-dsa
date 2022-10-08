// Move all negative numbers to beginning and positive
// to end with constant extra space

const move = (array) => {
  let positive = [];
  let negative = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negative.push(array[i]);
    } else {
      positive.push(array[i]);
    }
  }
  return negative.concat(positive);
};

let array1 = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(move(array1));
