let min, max;
// If there is only one element
if (left == right) {
  max = arr[left];
  min = arr[left];
  return { min, max };
}

/* If there are two elements */
if (right == left + 1) {
  if (arr[left] > arr[right]) {
    max = arr[left];
    min = arr[right];
  } else {
    max = arr[right];
    min = arr[left];
  }
  return { min, max };
}

/* If there are more than 2 elements */
mid = parseInt((left + right) / 2);
mml = minMaxRecursion(arr, left, mid);
mmr = minMaxRecursion(arr, mid + 1, right);

/* compare minimums of two parts */
if (mml.min < mmr.min) {
  min = mml.min;
} else {
  min = mmr.min;
}

/* compare maximums of two parts */
if (mml.max > mmr.max) {
  max = mml.max;
} else {
  max = mmr.max;
}

return { min, max };
