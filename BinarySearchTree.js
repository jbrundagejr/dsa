// Insertion - O(log n)
// Search - O(log n) but not guaranteed

class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(value){
    const node = new Node(value)
    if(this.root === null){
      this.root = node
      return this
    } else {
      let temp = this.root
      while(true){
        if (value === temp.value) return undefined
        if (value < temp.value){
          if (!temp.left) {
            temp.left = node
            return this
          } else {
            temp = temp.left
          }
        } else if (value > temp.value){
          if (!temp.right){
            temp.right = node
            return this
          } else {
            temp = temp.right
          }
        }
      }
    }
  }

  find(value){
    if(this.root === null) return undefined
    let temp = this.root
    let found = false
    while (temp && !found){
      if (value < temp.value){
        temp = temp.left
      } else if (value > temp.value){
        temp = temp.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return temp
  } 

  // move across siblings before moving to children
  breadthFirstSearch(){
    // starting point
    let node = this.root
    // list of nodes in the order we visited them
    const data = []
    // how to keep track of where we are
    const queue = []
    // add first node to the queue
    queue.push(node)
    // as long as there is a queue
    while(queue.length){
      // node is now first item in the queue
      node = queue.shift()
      // add node to our list
      data.push(node)
      // if there are any children of the current node, add them to the queue
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    // return our list
    return data
  }


  depthFirstSearchPreOrder(){
    // list of nodes in the order we visited them
    const data = []
    // helper function to recursively solve
    function traverse(node){
      // add node to outer list
      data.push(node)
      // if children, call the helper function again
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    // traverse starting at the root
    traverse(this.root)
    // return the list
    return data
  }

  depthFirstSearchPostOrder(){
    // list of nodes in the order we visited them
    const data = []
    // helper function to recursively solve
    function traverse(node){
      // if children, call the helper function again
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      // add node to outer list
      data.push(node)
    }
    // traverse starting at the root
    traverse(this.root)
    // return the list
    return data
  }

  depthFirstSearchInOrder(){
    // list of nodes in the order we visited them
    const data = []
    // helper function to recursively solve
    function traverse(node){
      // if more left children, call the helper function again
      if (node.left) traverse(node.left)
      // add node to outer list when at the bottom of left children
      data.push(node)
      // then work your way to right nodes of children
      if (node.right) traverse(node.right)
    }
    // traverse starting at the root
    traverse(this.root)
    // return the list
    return data
  }

}