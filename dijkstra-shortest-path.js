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

  var cheapestNode = Object.keys(costs).reduce( function(lowest, node) {

    // if cost of the current node lower then lowest
    if (lowest === 0 || costs[node] < costs[lowest]) {

      // if node has not been visited yet
      if (!visited.includes(node)) {
        lowest = node;
      }
    }

    return lowest;
    
  }, 0);

  return cheapestNode;
}


// Define example graph object
const exampleGraph = {
  initial: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, goal: 3},
  D: {goal: 2},
  goal: {}
};

var para = document.querySelector('p');
para.innerHTML = dijkstra(exampleGraph);
