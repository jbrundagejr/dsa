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

}