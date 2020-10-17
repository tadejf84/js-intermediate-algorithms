/**
 * Merge Sort algorithm for sorting an array
 * Merge Sort is a Divide and Conquer algorithm
 * Divides input array in 2 halves, calls itself for both and merges again
 * 
 * @param {array} input array
 * 
 * @returns {array} sorted array
 */
function mergeSort (arr) {

    // Filter number elements only
    const arrNumOnly = arr.filter(function(item){
        return typeof item === 'number';
    });

    // If only one element in the array
    if (arrNumOnly.length === 1) {
        return arrNumOnly;
    }

    // Split array in two halves
    const middle = Math.floor(arrNumOnly.length / 2);
    const left = arrNumOnly.slice(0, middle);
    const right = arrNumOnly.slice(middle, arrNumOnly.length);

    // Merge both halves
    return merge(mergeSort(left), mergeSort(right));
}


/**
 * Merge left and right halves
 * 
 * @param {array} left 
 * @param {array} right 
 * 
 * @returns {array} merged array
 */
function merge(left, right) {
    let output = [],
        indexLeft = 0,
        indexRight = 0;;

    // Loop throught each element in left and right array and compare
    while (indexLeft < left.length && indexRight < right.length ) {
            if (left[indexLeft] < right[indexRight]) {
            output.push(left[indexLeft]);
            indexLeft++;
        } else {
            output.push(right[indexRight]);
            indexRight++;
        }
    }

    // Concatenate left and right arrays to the output array
    return output.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

