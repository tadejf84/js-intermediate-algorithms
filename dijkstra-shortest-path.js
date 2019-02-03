/*
* Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph
* Find the shortest path from an initial node to goal node in a weighted graph
*/
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
  let node = findCheapestNode(costs, visited);

  // while there is at least one node that's not visited yet
  while (node) {

    const cost = costs[node]; // cost of the parent node
    const children = graph[node]; // children of the parent node

    for (let i in children) {

      let newCost = cost + children[i]; // new cost is calculated from cost of parent node + child node

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
  const optimalPath = ['goal'];
  let parent = parents[optimalPath];

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse();

  // return output
  return [costs.goal, optimalPath]
}

/*
find lowest cost node
*/
function findCheapestNode(costs, visited) {
  let lowest = 0;

  // for each key in costs object check if current key lower than lowest
  for (let key in costs) {
    if (lowest === 0 || costs[key] < costs[lowest]) {
      // only if node has not been visited yet
      if (!visited.includes(key)) {
        lowest = key;
      }
    }
  }

  return lowest;
}


