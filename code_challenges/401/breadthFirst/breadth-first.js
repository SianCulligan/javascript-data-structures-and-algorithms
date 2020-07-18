class Node {
  constructor(val) {
    this.val = val;
    this.connections = [];
  }
}

class Graph {
  constructor() {}

  addNode(val) {
    if (!this.adjList) this.adjList = [];
    let node = new Node(val);
    this.adjList.push(node);
  }
  
  addEdge(originVal, destVal, weight) {
    for (let i = 0; i < this.adjList.length; i++) {
      if (this.adjList[i].val === originVal) {
        this.adjList[i].connections.push({ destVal, weight });
        return;
      }
    }
  }

  breadthFirst (node) {}

}

module.exports = Graph;
