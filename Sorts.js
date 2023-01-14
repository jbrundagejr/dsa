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
    
  }
}