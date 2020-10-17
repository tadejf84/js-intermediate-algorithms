/**
 * Knapsack recursive
 * 
 * @param {number} capacity 
 * @param {array} size 
 * @param {array} value 
 * @param {number} n 
 * 
 * @returns {number} max value
 */
function knapsack(capacity, size, value, n) {
    if (n === 0 || capacity === 0) return 0;

    if (size[n-1] > capacity) {
        return knapsack(capacity, size, value, n-1);
    } else {
        return findMax(value[n-1] + knapsack(capacity-size[n-1], size, value, n-1), knapsack(capacity, size, value, n-1));
    }
}


/**
 * Knapsack dynamic
 * 
 * @param {number} capacity 
 * @param {array} size 
 * @param {array} value 
 * @param {number} n 
 * 
 * @returns {number} max value
 */
function knapsack2(capacity, size, value, n) {
    let K = [];

    for (let i = 0; i <= capacity + 1; i++) {
        K[i] = [];
    }

    for (let i = 0; i <= n; i++) {

        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            } else if (size[i - 1] <= w) {
                K[i][w] = findMax(value[i - 1] + K[i - 1][w-size[i - 1]], K[i-1][w]);
            } else {
                K[i][w] = K[i-1][w];
            }
        }

    }

    return K[n][capacity];
}


/**
 * Find max value
 * 
 * @param {number} a 
 * @param {number} b 
 * 
 * @returns {number} max
 */
function findMax(a, b) {
    return (a > b) ? a : b;
}