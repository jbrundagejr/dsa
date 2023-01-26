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
}
