// Square root of an integer

const sqrt = (value) => {
  let result = 1;
  let i = 0;
  while (result <= value) {
    i++;
    result = i * i;
  }
  return i - 1;
};

console.log(sqrt(4));
