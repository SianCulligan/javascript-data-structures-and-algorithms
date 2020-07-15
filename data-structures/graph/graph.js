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

  getadjList() {
    let vals = [];
    for (let i = 0; i < this.adjList.length; i++) {
      vals.push(this.adjList[i].val);
    }
    return vals.length ? vals : null;
  }

  getNeighbors(val) {
    let node;
    let neighbors;
    for (let i = 0; i < this.adjList.length; i++) {
      if (this.adjList[i].val === val) {
        node = this.adjList[i];
      }
    }
    neighbors = [...node.connections];
    for (let i = 0; i < this.adjList.length; i++) {
      for (let j = 0; j < this.adjList[i].connections.length; j++) {
        if (this.adjList[i].connections[j].destVal === val) {
          neighbors.push({
            destVal: this.adjList[i].val,
            weight: this.adjList[i].connections[j].weight,
          });
        }
      }
    }

    return neighbors;
  }

  size() {
    return this.adjList.length;
  }
}

module.exports = Graph;
