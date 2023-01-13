// FIFO = first in, first out concept is a Queue
// Insertion = O(1)
// Removal = O(1)
// Searching = O(N)
// Access = O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to queue
  enqueue(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  // remove from queue
  dequeue() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp.value;
  }
}
