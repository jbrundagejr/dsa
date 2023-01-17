// moves the largest values into their correct position as it goes
const bubbleSort = (arr) => {
  // create a stopping variable in case given arr is almost already sorted
  let noSwaps;
  // iterate over the array starting at the end moving to the beginning
  for (let i = arr.length; i > 0; i--) {
    // every pass through the array, assume there were no swaps
    noSwaps = true;
    // create a second marker to compare the number just before i
    for (let j = 0; j < i - 1; j++) {
      // if the number just before i is greater than i
      if (arr[j] > arr[j + 1]) {
        // swap those two numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // change no swaps so we know there was a swap to the iteration continues
        noSwaps = false;
      }
    }
    // if we didn't swap anything, break out of the iteration
    if (noSwaps) break;
  }
  // return the sorted array
  return arr;
};

// moves the smallest values into the correct order as it goes
const selectionSort = (arr) => {
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // create a marker pointing to our current lowest value (where we're starting)
    let min = i;
    // create a marker that goes through the array to compare to our first marker
    for (let j = i + 1; j < arr.length; j++) {
      // if the second marker's value is less than the first marker's value
      // update the lowest value marker
      if (arr[j] < arr[min]) min = j;
    }
    // if our min was changed from the second iteration,
    if (i !== min) {
      // swap the two values
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  // return the sorted array
  return arr;
};

// sorts the array as it iterates
// good if data is sorted and you need to add new items as it comes in
const insertionSort = (arr) => {
  // iterate through the array starting at the second element
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    // on each pass, create marker for value just before current element
    // and work backwards as long as the second marker value is greater
    // than the current element
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      //
      arr[j + 1] = arr[j];
    }
    // j will end one past where the value should go so update j + 1
    // to insert value at correct position
    arr[j + 1] = current;
  }
  // return sorted array
  return arr;
};

// breaks down array into multiple arrays with length of one and then
// merges back together and sorts as it goes
const mergeSort = (arr) => {
  // if the array is one or 0 elements, return that array
  if (arr.length <= 1) return arr;
  // find the midpoint of the array and divide it into two arrays
  let mid = Math.floor(arr.length / 2);
  // recursively call mergeSort to continually breakdown the array
  // passed in to get the array to length of 1 or 0
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // build back the arrays until they are the full length of the original array
  return merge(left, right);
};

// merges two arrays and sorts as it goes
// both arrays must be individually sorted before merging!
function merge(arr1, arr2) {
  // create empty array to return
  let results = [];
  let i = 0;
  let j = 0;
  // while there are still values we haven't looked at...
  while (i < arr1.length && j < arr2.length) {
    // if the value in the first array is smaller than the value
    // in the second array, push the value of the first array
    // to the results and move on to the next value in the first array
    if (arr2[j] > arri[i]) {
      results.push(arr1[i]);
      i++;
      // if the value in the first array is larger than the value
      // in the second array, push the value of the second array
      // into the results and move onto the next value in the second array
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // if we've gotten to the end of the second array,
  // and there are still elements in the first array not
  // looked at, push the remaining values of the first array to results
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // if we've gotten to the end of the first array,
  // and there are still elements in the second array not
  // looked at, push the remaining values of the second array to results
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // return the array
  return results;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    // call the pivot helper on the array
    let pivotIndex = pivot(arr, left, right);
    // recursively call the pivot helper on the subarray to the left
    // and to the right of the pivotIndex
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  //
  return arr;
};

// ideally, pivot should be chosen to it's roughly the
// median value of the data set you're sorting
function pivot(arr, start = 0, end = arr.length - 1) {
  // makes pivot the first element of the array
  let pivot = arr[start];
  // store the current pivot index in a variable to keep track
  // of where the pivot should end up
  let swapIndex = start;
  // loop through the array starting at the element just after
  // the pivot and go to specified end point
  for (let i = start + 1; i <= end; i++) {
    // if the pivot is greater than the current element...
    if (pivot > arr[i]) {
      // move the pivot index up
      swapIndex++;
      // and swap the current element with the element at the
      // pivot index
      swap(arr, swapIndex, i);
    }
  }
  // swap the starting element with the element at the updated pivot index
  swap(arr, start, swapIndex);
  return swapIndex;
}

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// helper function that swaps two values in an array
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
