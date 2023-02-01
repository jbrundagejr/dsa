// zigZag: Given an array of integers [numbers], check all triples of consecutive elements for being
// 'ZIGZAG'. Construct an array of length `numbers.length - 2` where the ith element of the output
// array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag and 0 otherwise.
// EXAMPLE: for numbers = [1, 2, 1, 3, 4], the output should be [1, 1, 0]
// [1, 2, 1] is a zigzag because (1 < 2 > 1), [2, 1, 3] is a zigzag because (2 > 1 < 3),
// [1, 3, 4 ] is not a zigzag because (1 < 3 < 4)



const isZigZag = (numbers) => {
  let zigZag = [];
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i - 2] < numbers[i - 1] && numbers[i - 1] > numbers[i])
      zigZag.push(1);
    else if (numbers[i - 2] > numbers[i - 1] && numbers[i - 1] < numbers[i])
      zigZag.push(1);
    else zigZag.push(0);
  }
  console.log(zigZag);
  return zigZag;
}

let numbers = [1, 2, 1, 3, 4];
isZigZag(numbers);

// Given an array of integers [a], calculate the digits that occur the most number of times in the array.
// Return the array of these digits in ascending order.
// EXAMPLE: for a = [25, 2, 3, 57, 38, 41] the output should be [2, 3, 5].
const mostFrequentDigits = (a) => {
  let freqCount = {};
  let frequentDigits = [];
  let digits = a.toString().split("");
  for (let val of digits) {
    freqCount[val] = (freqCount[val] || 0) + 1;
  }
  let objEntries = Object.entries(freqCount).filter((object) => {
    return Number.isInteger(parseInt(object[0]));
  });

  for (let i = 0; i < objEntries.length; i++) {
    if (objEntries[i][1] === 2) {
      frequentDigits.push(parseInt(objEntries[i][0]));
    }
  }
  return frequentDigits;
}

let a = [25, 2, 3, 57, 38, 41];
mostFrequentDigits(a);

// Write a method that finds out whether the given `methodName` is considered close to the given `className .
// We will consider two strings close if one can be obtained from the other, using the following operations:
// -swap any two symbols in one of the strings
// -swap occurrences of any two existing symbols in one of the strings (for example, if your string
// contains both `a`s and `b`s, you can change all `a`s to `b`s and all the `b`s to `a`s.)
// EXAMPLE: for `className = "abbzccc"` and `methodName = "babzzcz"`, the output should be `true`.
// for `className = "abcdb"` and `methodName = "bbbcca"` the output should be `false`.
const constructorNames = (className, methodName) => {
  let freqCount1 = {};
  let freqCount2 = {};
  for (let letter of className) {
    freqCount1[letter] = (freqCount1[letter] || 0) + 1;
  }
  for (let letter of methodName) {
    freqCount2[letter] = (freqCount2[letter] || 0) + 1;
  }
  let classArr = JSON.stringify(Object.keys(freqCount1).sort());
  let methodArr = JSON.stringify(Object.keys(freqCount2).sort());
  if (classArr.length !== methodArr.length) return false;
  if (classArr === methodArr) return true;
  else return false;
}

let className = "abbzccc";
let methodName = "babzzcz";
constructorNames(className, methodName);

// Given two strings, write a function to determine if the second string
// is an anangram of the first. An anagram is a word, phrase or name formed by
// rearranging the letters of another, such as cinema formed from iceman

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  let freqCount1 = {}
  let freqCount2 = {}
  for (let char of str1){
    freqCount1[char] = (freqCount1[char] || 0) + 1
  }
  for (let char of str2){
    freqCount2[char] = (freqCount2[char] || 0) + 1
  }
  for (let char of str1){
    if(freqCount1[char] !== freqCount2[char]) return false
  }
  return true
}

validAnagram('abdc', 'cbad')


// Write a function that accepts a sorted array and counts the unique values
// in the array. There can be negative numbers in the array, but it will always be sorted
// MULTIPLE POINTERS
const countUniqueValues = (arr) => {
  if(arr.length === 0) return 0
  const i = 0
  for (let j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

// Write a function which accepts an array of integers and a number called N. 
// The function should calculate the maximum sum on n consecutive elements in the array.
// SLIDING WINDOW
const maxSubarraySum = (arr, n) => {
  if (arr.lenght < n) return null
  // 
  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < n; i++){
    // sum together the first elements of the defined length
    maxSum += arr[i]
  }
  // store that value in a temp
  tempSum = maxSum
  // loop through the array starting after where you summed from
  for (let i = n; i < arr.length; i++){
    // add the first new value and subtract the first value from the original
    // sum
    tempSum = tempSum - arr[i - n] + arr[i]
    // take whichever value is greater
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

