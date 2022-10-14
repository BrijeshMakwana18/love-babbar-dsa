const find = (arrOne, arrTwo, arrThree) => {
  let l = Math.max(arrOne.length, arrTwo.length, arrThree.length);
  let arr =
    arrOne.length == l ? arrOne : arrTwo.length == l ? arrTwo : arrThree;
  let ans = [];
  for (let i = 0; i < l; i++) {
    if (
      arrOne.includes(arr[i]) &&
      arrTwo.includes(arr[i]) &&
      arrThree.includes(arr[i])
    ) {
      ans.push(arr[i]);
    }
  }
  return ans;
};

let arr1 = [1, 5, 10, 20, 40, 80];
let arr2 = [6, 7, 20, 80, 100];
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
console.log(find(arr1, arr2, arr3));
