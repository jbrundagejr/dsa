// adjaceny list model - like most data in the real-world lends itself
// to sparser and/or larger graphs
// an  undirected graph A <=> B

class Graph {
  constructor(){
    this.adjacentyList = {}
  }

  // accepts the name of a vertex and adds it to the adjacency list
  addVertex(vertex){
    // adds key to the adjacency list and sets its value to an empty array
    if (!this.adjacentyList[vertex]){
      this.adjacentyList[vertex] = []
    }
  }

  // adds edges to both vertices
  // if we want to make it directional, remove the second push
  addEdge(vertex1, vertex2){
    if(this.adjacentyList[vertex1]){
      this.adjacentyList[vertex1].push(vertex2)
    }
    if(this.adjacentyList[vertex2]){
      this.adjacentyList[vertex2].push(vertex1)
    }
  }

  // removes edges between two vertexes
  removeEdge(vertex1, vertex2){
    // if vertex1 exists in the graph
    if(this.adjacentyList[vertex1]){
      // update the value of that vertex to not include vertex2
      this.adjacentyList[vertex1] = this.adjacentyList[vertex1].filter(vert => vert !== vertex2)
    }
    // repeat other way with vertex2
    if(this.adjacentyList[vertex2]){
      this.adjacentyList[vertex2] = this.adjacentyList[vertex2].filter(vert => vert !== vertex1)
    }
  }

  // removes a vertex from a graph
  removeVertex(vertex){
    // check if the vertex exists in the list
    if (this.adjacentyList[vertex]){
      // while there are values at the vertex
      while (this.adjacentyList[vertex].length){
        // grab each vertex
        let vert2 = this.adjacentyList[vertex].pop()
        // and remove the edge between the two
        this.removeEdge(vertex, vert2)
      }
      // and then delete the entire vertex from the list
      delete this.adjacentyList[vertex]
    }
  }

  // depth-first traversal- go as far from a vertex without backtracking
  recursiveDFS(vertex){
    // list to store the order of vertices we visited
    let results = []
    // object to keep track if we've visited a vertex
    let visited = {}
    // variable to pass context of adjacency list into helper function
    const adjacentyList = this.adjacentyList
    // helper function to call recursively
    function DFS(vert){
      // if the value is empty, return null
      if(!vert) return null
      // keep track of if we've visited the vertex
      visited[vert] = true
      // add it to our results list
      results.push(vert)
      // map over all the values at the given vertex
      adjacentyList[vert].forEach(neighbor => {
        // if we haven't visited the neighbor
        if(!visited[neighbor]){
          // call the helper function again on the neighbor
          return DFS(neighbor)
        }
      })
    }
    // invoke the helper with our starting point
    DFS(vertex)
    // return the results
    return results
  }

  iterativeDFS(vertex){
    
  }
}
