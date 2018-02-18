// Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph
// Find the shortest path from an initial node to goal node in a weighted graph
function dijkstra(graph) {

  // track lowest cost to reach each node
  const costs = {
    initial: 0,
    goal: Infinity
  };

  // track edges
  const parents = {};

  // track nodes that have already been visited
  const visited = [];

  // find cheapest node from initial
  var node = findCheapestNode(costs, visited);


  // while there is at least one node that's not visited yet
  while (node) {

    var cost = costs[node]; // cost of the parent node
    var children = graph[node]; // children of the parent node

    for (let i in children) {

      var newCost = cost + children[i]; // new cost is calculated from cost of parent node + child node

      if (!costs[i]) {
        costs[i] = newCost;
        parents[i] = node;
      }

      if (costs[i] > newCost) {
        costs[i] = newCost;
        parents[i] = node;
      }
    }

    // node has been visited - push in the visited array
    visited.push(node);

    // repeat until all nodes have been visited
    node = findCheapestNode(costs, visited);
  }

  // find optimal path to the goal node
  var optimalPath = ['goal'];
  var parent = parents[optimalPath];

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse();

  return 'Cost of the shortest path is ' + costs.goal + '. The optimal path follows these nodes: ' + optimalPath;

};

// find lowest cost node
function findCheapestNode(costs, visited) {

  // initial cost is equal to 0
  var lowest = 0;

  // for each key in costs object check if current key lower than lowest
  for (var key in costs) {
    if (lowest === 0 || costs[key] < costs[lowest]) {
      // only if node has not been visited yet
      if (!visited.includes(key)) {
        lowest = key;
      }
    }
  }

  // return lowest cost node
  return lowest;

}

// Define example graph object
const exampleGraph = {
  initial: {A: 14, B: 8},
  A: {C: 8, B: 11},
  B: {D: 7, E: 10},
  C: {F: 7, G: 4, D: 2},
  D: {C: 2, E: 6},
  E: {D: 6, G: 11},
  F: {goal: 9, G: 14},
  G: {goal: 10, F: 14},
  goal: {}
};

var para = document.querySelector('p');
// para.innerHTML = dijkstra(exampleGraph);
