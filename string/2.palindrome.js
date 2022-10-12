const palindrome = (str) => {
  let arr = str.split("");
  let len = parseInt(arr.length / 2);
  for (let i = 0; i < len; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr.join("") === str;
};

let str = "acabaca";
console.log(palindrome(str));
