//
//
//
//
// Neighbors are returned with the weight between nodes included
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned
// An empty graph properly returns null

const Graph = require('../graph');

describe('Testing fnctionality of Graph', () => {
  it('Node can be successfully added to the graph & can give me all the nodes', () => {
    let graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    let nodes = graph.getNodes();

    expect(nodes.length).toBe(4);
    expect(nodes).toEqual(['A', 'B', 'C', 'D']);

  });

  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B', 2);

    expect(graph.nodes[0]).toMatchObject({
      val: 'A',
      connections: [{ destVal: 'B', weight: 2 }],
    });
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'C', 4);
    graph.addEdge('B', 'A', 1);
    graph.addEdge('D', 'B', 5);

    expect(graph.getNeighbors('A')).toEqual([
      { destVal: 'B', weight: 2 },
      { destVal: 'C', weight: 4 },
      { destVal: 'B', weight: 1 },
    ]);
    expect(graph.getNeighbors('B')).toEqual([
      { destVal: 'A', weight: 1 },
      { destVal: 'A', weight: 2 },
      { destVal: 'D', weight: 5 },
    ]);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    expect(graph.size()).toBe(4);
  })

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();

    graph.addNode('A');
    graph.addEdge('A', 'A', 5);

    expect(graph.nodes[0]).toMatchObject({
      val: 'A',
      connections: [{ destVal: 'A', weight: 5 }],
    });
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();
    expect(graph.nodes).not.toBeDefined();
  })
})
