class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add node to the end of the list
  push(value) {
    // create new node
    let node = new Node(value);
    // if the list is empty, make the head and tail the new node and you're done
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // otherwise add a pointer from the tail to the new node
      this.tail.next = node;
      // add a pointer from the new node back to the tail
      node.prev = this.tail;
      // update the tail to the new node
      this.tail = node;
    }
    // add one to the length of the list
    this.length++;
    // return the list
    return this;
  }

  // remove the last node from the list
  pop() {
    // if there is no list, you're done
    if (this.head === null) return undefined;
    // create a variable pointing to the last node
    let current = this.tail;
    // if the list is only one node long, detach the node from the list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // otherwise make the tail the placeholder's previous pointer
      this.tail = current.prev;
      // detach the tail from the list
      this.tail.next = null;
      // detach the placeholder from the list
      current.prev = null;
    }
    // decrease the length by one
    this.length--;
    // return the detached node
    return current;
  }

  // add a node to the beginning of the list
  unshift(value) {
    // create new node
    let node = new Node(value);
    // if the list is empty, make the head and tail the new node and you're done
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // otherwise point the previous value of the head of the list to the new node
      this.head.prev = node;
      // point the new node's next value to the head
      node.next = this.head;
      // make the new node the head
      this.head = node;
    }
    // increase the length by one
    this.length++;
    // return the list
    return this;
  }

  // remove the first node from the list
  shift() {
    // if there are no nodes to remove, you're done
    if (this.length === 0) return undefined;
    // create a variable holding the old head's value
    let oldHead = this.head;
    // if the list has only one node, remove the node from it
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // otherwise update the head to point to be the old head's next node
      this.head = oldHead.next;
      // detach the old head in both directions
      this.head.prev = null;
      oldHead.next = null;
    }
    // decrease the length by one
    this.length--;
    // return the detached node
    return oldHead;
  }

  // find a node by its index
  get(index) {
    // if the index is less than zero or greater than the number of items in the list, you're done
    if (index < 0 || index >= this.length) return undefined;
    // if the index is less than the mid-point of the list, go to the head and work up
    if (this.length / 2 >= index) {
      // create a counter to keep track of what index you're at
      let counter = 0;
      // create a variable to keep track of which node you're at
      let current = this.head;
      // traverse through the nodes until you find your given index
      while (counter !== index) {
        // move up to the next node
        current = current.next;
        // count up
        counter++;
      }
      // if the index is greater than the mid-point of the list, go to the tail and work down
    } else {
       // create a counter to keep track of what index you're at
      let counter = this.length - 1;
       // create a variable to keep track of which node you're at
      let current = this.tail;
       // traverse through the nodes until you find your given index
      while (counter !== index) {
        // move down to the next node
        current = current.prev;
        // count down
        counter--;
      }
    }
    // the current will be at the correct node due to either while loop moving the current variable
    return current;
  }

  // update a node at a specific index and return whether is was successfully added or not
  set(index, value) {
    // find the node position in the list
    let node = this.get(index);
    // if the node can be inserted, add it and return true
    if (node) {
      node.value = value;
      return true;
    }
    // otherwise the node can't be added and return false
    return false;
  }

  // add a node to the list at a specific index and return whether it was successfully added or not
  insert(index, value) {
    // if the index is less than zero or greater than the number of items in the list, you're done
    if (index < 0 || index >= this.length) return false;
    // if you want to add the node to the beginning, call this.unshift(). the !! operators coerce the return value 
    // of this.unshift() to a boolean
    if (index === 0) return !!this.unshift(value);
    // if you want to add the node to the end, call this.push(). 
    if (index === this.length) return !!this.push(value);
    // otherwise...
    else {
      // create new node
      let newNode = new Node(value);
      // find the node at the spot just before where you want to insert it
      let prevNode = this.get(index - 1);
      // at a variable to store the spot just after where you want to insert to store its values
      let nextNode = prevNode.next;
      // point the spot just before insertion to the new node
      prevNode.next = newNode;
      // point the new node back to the spot just before insertion
      newNode.prev = prevNode;
      // point the new node forward to the spot just after insertion
      newNode.next = nextNode;
      // point the spot just after insertion back to the new node
      nextNode.prev = newNode;
    }
    // increase the length by one
    this.length++;
    // return that the insertion was successful
    return true;
  }

  // remove a node at a specific index
  remove(index) {
    // check edge cases
    if (index < 0 || index >= this.length) return false;
    // if trying to remove the first node, use this.unshift and coerce to a boolean return value
    if (index === 0) return !!this.shift();
    // if trying to remove the last node, use this.pop()
    if (index === this.length - 1) return !!this.pop();
    // otherwise...
    else {
      // find the node you want to remove
      let removedNode = this.get(index);
      // store the node's previous and next values in a variable
      let prevNode = removedNode.prev;
      let nextNode = removedNode.next;
      // point the previous node to the node following the one removed
      prevNode.next = nextNode;
      // point the next node to the node preceding the node removed
      nextNode.prev = prevNode;
      // detach the node you want to remove from the list
      removedNode.next = null;
      removedNode.prev = null;
    }
    // decrease the length by one
    this.length--;
    // return the removed node
    return removedNode;
  }
}
