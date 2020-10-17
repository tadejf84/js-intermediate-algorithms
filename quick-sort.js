/**
 * QuickSort is a Divide and Conquer algorithm
 * Picks an element as pivot and partitions the given array around the picked pivot
 * 
 * @param {array} arr 
 * @param {number} left pivot 
 * @param {number} right pivot
 * 
 * @returns {array} sorted array
 */
function quickSort(arr, left = 0, right = arr.length - 1){
    let i = left, 
        j = right;

    // Pick pivot at the middle of the array
    const pivotIndex = Math.floor((left + right) / 2);
    const pivotVal = arr[pivotIndex];

    // Check initial user input
    if (arr.length === 0) { return 'You entered an empty array!'; }
    if (arr.length < 2) { return arr; }

    /*
    * While left array element value is lower than pivot index and right array element value higher than pivot index continue
    * Swap the element in the left array with the element in the right array
    */
    while (i <= j) {

        while(arr[i] < pivotVal) {
            i++;
        }

        while(arr[j] > pivotVal) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    if (left < i - 1) {
        quickSort(arr, left, i-1);
    }

    if (right > i) {
        quickSort(arr, i, right);
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
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

