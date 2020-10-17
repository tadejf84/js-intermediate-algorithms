/**
 * Shell sort algorithm
 * 
 * @param {array} arr
 * 
 * @returns {array} sorted array 
 */
function shellSort(arr) {

    // Define initial gap
    let gap = arr.length / 2;

    while (gap > 0) {
        for (i = gap; i < arr.length; i++) {
            for (let j = i; j >= gap && arr[j] < arr[j-gap]; j -= gap) {
                swap(arr, j, j-gap);
            }
        }
        
        // Compute new gap value
        gap = parseInt( (gap - 1) / 3 );
    }

    return arr;
}


/**
 * Swap elements in array
 * 
 * @param {array} arr 
 * @param {number} a 
 * @param {number} b 
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
  
