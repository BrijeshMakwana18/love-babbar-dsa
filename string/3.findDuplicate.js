// Print all the duplicates in the input string

const duplicate = (str) => {
  const arr = str.split("");
  let temp = [];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) {
      if (!ans.includes(arr[i])) {
        ans.push(arr[i]);
      }
    } else {
      temp.push(arr[i]);
    }
  }
  return ans.join("");
};

const str = "abcadd";

console.log(duplicate(str));
