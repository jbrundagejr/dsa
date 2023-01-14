const bubbleSort = (arr) => {
  let noSwaps
  for(let i = arr.length; i > 0; i --){
    noSwaps = true
    for (let j = 0; j < i -1; j++){
      if (arr[j] > arr[j + 1]){
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }  
  return arr
}

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++){
    let min = i
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[min]) min = j
    }
    if (i !== min){
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min = temp]
    }
  }
  return arr
}

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++){
    let current = arr[i]
    for (let j = i - 1; j > 0 && arr[j] > current; j--){
      arr[j + 1] = arr[j]
    }
    arr[i + i] = current
  }
  return arr
}

const mergeSort = (arr) => {
  if (arr.length < 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(arr1, arr2){
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length){
    if (arr2[j] > arri[i]){
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length){
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length){
    results.push(arr2[j])
    j++
  }
  return results
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right){
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

function pivot (arr, start = 0, end = arr.length - 1){
  function swap(array, i, j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  let pivot = arr[start]
  let swapIndex = start
  for (let i = start + 1; i < arr.length; i++){
    if (pivot > arr[i]){
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)
  return swapIndex
}

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

function digitCount(num){
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
  let maxDigits = 0
  for(let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}