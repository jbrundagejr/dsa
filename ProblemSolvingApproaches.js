let arr = []

// FREQUENCY COUNTER
// uses objects or sets to collect values/frequencies of values
const freqCounter = {}
for(let val of arr){
  // check the value in the object for a given key. 
  // if it does exist, add 1 to the value for that key
  // If it doesn't exist, set the value for that key to one
  freqCounter[val] ? freqCounter[val] += 1 : freqCounter[val] = 1
}

// MULTIPLE POINTERS
let left = 0
let right = arr.length - 1
// loop through array while the right pointer is greater than the left pointer
while(left < right){
  let value = arr[left] + arr[right]
  // condition you want to check for
  if(value === 0){
    // blah blah blah
    return [arr[left], arr[right]]
    // if sum is greater than zero, go to right and move it down
  } else if (sum > 0){
    right--
    // if sum is less than zero, go the left and move it up and repeat the loop
  } else {
    left++
  }
}

// SLIDING WINDOW
let num = 3
let maxSum = 0
let tempSum = 0
for (let i = 0; i < num; i++){
  maxSum += arr[i]
}
tempSum = maxSum
for (let i = num; i < arr.length; i++){
  // this is really sliding window- updates the value we're trying
  // to find as we loop just once
  tempSum = tempSum - arr[i - num] + arr[i]
  maxSum = Math.max(maxSum, tempSum)
}

// DIVIDE AND CONQUER
// only on sorted arrays
