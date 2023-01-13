const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
};

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let pointer = Math.floor((left + right) / 2);
  while (arr[pointer] !== num && left <= right) {
    if (num < arr[pointer]) right = pointer - 1;
    else left = pointer + 1;
    pointer = Math.floor((left + right) / 2);
  }
  return arr[pointer] === num ? pointer : -1;
};

// naive bubble sort
const findWord = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
    }
    if (j === short.length - 1) count++;
  }
  return count;
};
