// LIFO - last in, first out is the concept of a Stack
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

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to top of stack
  push(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let current = this.first;
      this.first = node;
      this.first.next = current;
    }
    return ++this.size;
  }

  // removes from top of stack
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp.value;
  }
}
