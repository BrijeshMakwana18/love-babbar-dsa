// Program to cyclically rotate an array by one

const rotate = (array) => {
  let ans = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      ans[0] = array[i];
    } else {
      ans[i + 1] = array[i];
    }
  }
  return ans;
};

let array1 = [1, 2, 3, 4, 5];
console.log(rotate(array1));
