
/**
 * Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph
 * Find the shortest path from an initial node to goal node in a weighted graph
 * 
 * @param {object} graph 
 * 
 * @returns {array} cost and optimal path
 */
function dijkstra(graph) {

    // Track lowest cost to reach each node
    const costs = {
        initial: 0,
        goal: Infinity
    };

    // Track edges
    const parents = {};

    // Track nodes that have already been visited
    const visited = [];

    // Find cheapest node from initial
    let node = findCheapestNode(costs, visited);

    // While there is an unvisited node
    while (node) {

        const cost = costs[node]; // Cost of the parent node
        const children = graph[node]; // Children of the parent node

        for (let i in children) {

            let newCost = cost + children[i]; // New cost is calculated from cost of parent node + child node

            if (!costs[i]) {
                costs[i] = newCost;
                parents[i] = node;
            }

            if (costs[i] > newCost) {
                costs[i] = newCost;
                parents[i] = node;
            }
        }

        // Node has been visited - push in the visited array
        visited.push(node);

        // Repeat until all nodes have been visited
        node = findCheapestNode(costs, visited);
    }

    // Find optimal path to the goal node
    const optimalPath = ['goal'];
    let parent = parents[optimalPath];

    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }

    optimalPath.reverse();

    return [costs.goal, optimalPath];
}


/**
 * Find lowest cost node
 * 
 * @param {object} costs 
 * @param {object} visited 
 * 
 * @returns {string} lowest
 */
function findCheapestNode(costs, visited) {
    let lowest = 0;

    // For each key in costs object check if current key is lower than the lowest
    for (let key in costs) {
        if (lowest === 0 || costs[key] < costs[lowest]) {

            // Only if node has not been visited yet
            if (!visited.includes(key)) lowest = key;
        }
    }

    return lowest;
}


