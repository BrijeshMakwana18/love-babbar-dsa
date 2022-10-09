// Program to reverse a string

const reverse = (str) => {
  let strArr = str.split("");
  let ans = new Array(strArr.length);
  for (let i = strArr.length - 1; i >= 0; i--) {
    ans[strArr.length - i] = strArr[i];
  }
  return ans.join("");
};

const str = "test";
console.log(reverse(str));
