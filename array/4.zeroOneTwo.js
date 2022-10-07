// Given an array which consists of only 0, 1 and 2.
// Sort the array without using any sorting algo

const sort = (array) => {
  let countZero = (countOne = countTwo = 0);
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 0:
        countZero++;
        break;
      case 1:
        countOne++;
        break;
      case 2:
        countTwo++;
        break;
    }
  }
  let zeroArray = new Array(countZero).fill(0);
  let oneArray = new Array(countOne).fill(1);
  let twoArray = new Array(countTwo).fill(2);
  return zeroArray.concat(oneArray).concat(twoArray);
};

let array1 = [1, 2, 0, 1, 0, 0, 0, 2, 2, 1];
console.log(sort(array1));
