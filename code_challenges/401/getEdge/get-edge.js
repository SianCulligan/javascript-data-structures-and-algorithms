const getEdge = (graph, cities) => {
  let cost = 0;
  let directFlight = false;
  for (let i = 0; i < cities.length; i++) {
    let neighbors = graph.adjacencyList.get(cities[i])
    neighbors.forEach((neighbor) => {
      let key = Object.keys(neighbor)
      if (key === cities[i + 1]) {
        directFlight = true;
        cost += neighbors[neighbor]
      } else {
        return false;
      }})
  }
  return `${directFlight}, ${cost}`;
}

module.exports = getEdge;
