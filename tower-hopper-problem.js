/**
 * Function hoppable should return minimum number steps if array is hoppable
 * If not hoppable, should return false
 * 
 * @param {array} arr 
 * @param {number} start 
 * @param {number} end 
 * 
 * @returns {number} number of jumps
 */
function minJumpsToHop(arr, start, end) {
    let min = 999999, 
        jumps;

    // Start tower and end tower are the same
    if(start === end) return 0;

    // First step height is 0, tower is not hoppable
    if(arr[start] === 0) return false;

    // Find min jumps
    for (let i = start + 1; i <= end && i <= start + arr[start]; i++) { 
        jumps = minJumpsToHop(arr, i, end);
        if(jumps != 999999 &&  jumps + 1 < min) {
            min = jumps + 1; 
        }
    } 

    // If array not hoppable, return false, else return min steps to hop
    if(jumps === false) {
        return false;
    } else {
        return min; 
    }

}



