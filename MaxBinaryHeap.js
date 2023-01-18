class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // adds node in correct position
  insert(value) {
    // add new value to end of list
    this.values.push(value);
    // bubble it to its correct position
    this.bubbleUp();
  }

  bubbleUp() {
    // create a variable to keep track of index
    let index = this.values.length - 1;
    // current element being compared
    let element = this.values[index];
    // as long as index is greater than 0...
    while (index > 0) {
      // find the parent index of the node we're looking at
      let parentIndex = Math.floor((index - 1) / 2);
      // find the parent value
      let parent = this.values[parentIndex];
      // if the current element is less than or equal to the parent,
      // break out of the loop
      if (element <= parent) break;
      // otherwise swap the nodes
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // and update the index we're looking at to be the parent index
      // and start again
      index = parentIndex;
    }
  }

  // pulls the largest node out and reorders the heap appropriately
  extractMax() {
    // largest value to be returned at the end
    const max = this.values[0];
    // remove the last element of the heap
    const end = this.values.pop();
    // as long as there are values to extract...
    if (this.values.length > 0) {
      // replace the root with the last element of the heap
      this.values[0] = end;
      // sink the new root to its correct position
      this.sinkDown();
    }
    return max;
  }

  // sink the new root down to its correct position
  sinkDown() {
    // create a variable to keep track of which index we're at
    let index = 0;
    // variable to make code cleaner later
    const length = this.values.length;
    // current element we're looking at
    const element = this.values[0];
    while (true) {
      // find the children indices of the current node we're looking at
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      // variable to keep track of which child to swap to,
      // resets to null in every loop
      let swapIndex = null;
      // make sure the leftchildIndex is in bounds
      if (leftChildIndex < length) {
        // set the left child value to be the element the leftchildIndex
        leftChild = this.values[leftChildIndex];
        // if the left child value is larger than the element,
        // set the swap value to the index of the left child
        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }
      // then check that the right child is in bounds
      if (rightChildIndex < length) {
        // set the right child value to the element at the rightchildIndex
        rightChild = this.values[rightChildIndex];
        if (
          // if no swap was made with the left child and the right child
          // is greater than the element
          (swapIndex === null && rightChild > element) ||
          // OR if the element was swapped with the left child but the
          // right child is larger...
          (swapIndex !== null && rightChild > leftChild)
        ) {
          // set the swap index to be the right child index
          swapIndex = rightChildIndex;
        }
      }
      // if there were never any swaps, break out
      if (swapIndex === null) break;
      // swap the element and the value at the correct child node
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      // move the current index to the child index we swapped and start over
      index = swapIndex;
    }
  }
}
