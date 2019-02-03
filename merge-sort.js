/*
* merge sort array
* merge Sort is a Divide and Conquer algorithm. 
* divides input array in 2 halves, calls itself for both and merges again
*/
function mergeSort (arr) {

  // filter number elements only
  const arrNumOnly = arr.filter(function(item){
    return typeof item === 'number';
  });

  // if only one element in the array
  if (arrNumOnly.length === 1) {
    return arrNumOnly;
  }

  // split array in two halves
  const middle = Math.floor(arrNumOnly.length / 2);
  const left = arrNumOnly.slice(0, middle);
  const right = arrNumOnly.slice(middle, arrNumOnly.length);

  // merge both halves
  return merge(mergeSort(left), mergeSort(right));
}


/*
* helper function to merge left and right halves
*/
function merge(left, right) {
  let output = [],
      indexLeft = 0,
      indexRight = 0;;

  // loop throught each element in left and right array and compare
  while (indexLeft < left.length && indexRight < right.length ) {
    if (left[indexLeft] < right[indexRight]) {
      output.push(left[indexLeft]);
      indexLeft++;
    } else {
      output.push(right[indexRight]);
      indexRight++;
    }
  }

  // concatenate left and right arrays to the output array
  return output.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

