// Find first and last positions of
// an element in a sorted array

const search = (arr, value) => {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      ans.push(i);
    }
  }
  return { first: ans[0], last: ans[ans.length - 1] };
};

let arr = [1, 6, 5, 5, 1, 5, 67, 123, 125];
console.log(search(arr, 6));
