function mergeSort (arr) {

  /* check if array element is number */
  let arrNumOnly = arr.filter(function(item){
    return typeof item === 'number';
  });

  /* if only one element in the array */
  if (arrNumOnly.length === 1) {
    return arrNumOnly;
  }

  /* split array in two parts */
  const middle = Math.floor(arrNumOnly.length / 2);
  const left = arrNumOnly.slice(0, middle);
  const right = arrNumOnly.slice(middle, arrNumOnly.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let output = [],
      indexLeft = 0,
      indexRight = 0;;

  /* loop throught each element in left and right array and compare */
  while (indexLeft < left.length && indexRight < right.length ) {
    if (left[indexLeft] < right[indexRight]) {
      output.push(left[indexLeft]);
      indexLeft++;
    } else {
      output.push(right[indexRight]);
      indexRight++;
    }
  }

  /* concatenate left and right arrays to the output array */
  return output.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

var para = document.querySelector('p');
const example = [12, 'test', 11, 7, 13, 14, 47, 88, 113, 2];
// para.innerHTML = mergeSort(example);
