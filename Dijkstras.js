// almost same as just regular Graph in other file, but edges have weights
// so they are objects instead of just strings
class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  // accepts the name of a vertex and adds it to the adjacency list
  addVertex(vertex) {
    // adds key to the adjacency list and sets its value to an empty array
    if (!this.adjacentyList[vertex]) {
      this.adjacentyList[vertex] = []
    }
  }

  // adds edges to both vertices
  // weight signifies edge length/strength
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacentyList[vertex1]) {
      this.adjacentyList[vertex1].push({ node: vertex2, weight })
    }
    if (this.adjacentyList[vertex2]) {
      this.adjacentyList[vertex2].push({ node: vertex1, weight })
    }
  }

  dijkstra(start, finish){
    const nodes = new PriorityQueue()
    const distances = {}
    // placeholder to keep track of previous nodes visited
    const previous = {}
    // placeholder for whatever the short distance between vertices is
    let shortest
    // list of node traversal order to be returned at the end
    let path = []
    // build initital state of distances object
    // add all nodes to priority queue with their distance as the priority
    for(let vertex in this.adjacencyList){
      if (vertex === start) {
        // first node distance is zero
        distances[vertex] = 0
        // add first note to the priority queue
        nodes.enqueue(vertex, 0)
      } else {
        // otherwise it's infinity
        distances[vertex] = Infinity
        // and add it to the priority queue
        nodes.enqueue(vertex,Infinity)
      }
      // at first nothing has been visited
      previous[vertex] = null
    }
    // as long as there is something to visit
    while (nodes.values.length){
      // since is is a priority queue, it will always give us
      // the node with the shortest distance since that is what we are setting as distance on line 46
      shortest = nodes.dequeue().value
      if(shortest === finish){
        // refer to previous object. As long as there is a value associated with the key,
        // which there will be until you get to the first node, see line 51
        while(previous[smallest]) {
          // add the smallest distance to the path
          path.push(smallest)
          // update the smallest to be the node the smallest was just looking at on line 61
          smallest = previous[smallest]
        }
        // call break to bust out of while loop set on 54, as priority queue keeps getting added to
        break
      }
      // if the current vertex 
      if (shortest || distances[shortest] !== Infinity){
        // loop over al the neighbors of the current vertex
        for(let neighbor in this.adjacencyList[smallest]){
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          // check the distance between the possible shortest route and the stored distance from line 44
          // use the key of .node, look at how the edges are added in `addEdge`
          let nextNeighbor = nextNode.node
          // compare the distance to the current shortest distance to that node
          if (candidate < distances[nextNeighbor]) {
            // update the new smallest distance to neightbor
            distances[nextNeighbor] = candidate
            // update previous - how we got to neight
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    // add the smallest to the path and reverse the order and return it all
    return path.concat(smallest).reverse()
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // adds node in correct position
  enqueue(value, priority) {
    let node = new Node(value, priority);
    // add new value to end of list
    this.values.push(node);
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
      if (element.priority >= parent.priority) break;
      // otherwise swap the nodes
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // and update the index we're looking at to be the parent index
      // and start again
      index = parentIndex;
    }
  }

  // pulls the largest node out and reorders the heap appropriately
  dequeue() {
    // largest value to be returned at the end
    const min = this.values[0];
    // remove the last element of the heap
    const end = this.values.pop();
    // as long as there are values to extract...
    if (this.values.length > 0) {
      // replace the root with the last element of the heap
      this.values[0] = end;
      // sink the new root to its correct position
      this.sinkDown();
    }
    return min;
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
        if (leftChild.priority < element.priority) {
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
          (swapIndex === null && rightChild.priority < element.priority) ||
          // OR if the element was swapped with the left child but the
          // right child is larger...
          (swapIndex !== null && rightChild.priority < leftChild.priority)
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

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}