// zigZag: Given an array of integers [numbers], check all triples of consecutive elements for being
// 'ZIGZAG'. Construct an array of length `numbers.length - 2` where the ith element of the output
// array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag and 0 otherwise.
// EXAMPLE: for numbers = [1, 2, 1, 3, 4], the output should be [1, 1, 0]
// [1, 2, 1] is a zigzag because (1 < 2 > 1), [2, 1, 3] is a zigzag because (2 > 1 < 3),
// [1, 3, 4 ] is not a zigzag because (1 < 3 < 4)

let numbers = [1, 2, 1, 3, 4];

function isZigZag(numbers) {
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

isZigZag(numbers);

// Given an array of integers [a], calculate the digits that occur the most number of times in the array.
// Return the array of these digits in ascending order.
// EXAMPLE: for a = [25, 2, 3, 57, 38, 41] the output should be [2, 3, 5].

let a = [25, 2, 3, 57, 38, 41];

function mostFrequentDigits(a) {
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
  console.log(frequentDigits);
  return frequentDigits;
}

mostFrequentDigits(a);

// Write a method that finds out whether the given `methodName` is considered close to the given `className .
// We will consider two strings close if one can be obtained from the other, using the following operations:
// -swap any two symbols in one of the strings
// -swap occurrences of any two existing symbols in one of the strings (for example, if your string
// contains both `a`s and `b`s, you can change all `a`s to `b`s and all the `b`s to `a`s.)
// EXAMPLE: for `className = "abbzccc"` and `methodName = "babzzcz"`, the output should be `true`.
// for `className = "abcdb"` and `methodName = "bbbcca"` the output should be `false`.

let className = "abbzccc";
let methodName = "babzzcz";

function constructorNames(className, methodName) {
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
  console.log(classArr);
  console.log(methodArr);
  if (classArr.length !== methodArr.length) return false;
  if (classArr === methodArr) return true;
  else return false;
}

constructorNames(className, methodName);
