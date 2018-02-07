function mergeSort (arr) {

  // check if array element is number
  var arrNumOnly = [];
  arr.forEach(function(item){
    if (typeof item === 'number') {
      arrNumOnly.push(item);
    }
  });
  // var arrNumOnly = arr.filter(function(item){
  //   return typeof item === 'number';
  // });

  // if only one element in the array
  if (arrNumOnly.length === 1) {
    return arrNumOnly;
  }

  // split array in two parts
  var middle = Math.floor(arrNumOnly.length / 2);
  var left = arrNumOnly.slice(0, middle);
  var right = arrNumOnly.slice(middle, arrNumOnly.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var output = [];
  var indexLeft = 0;
  var indexRight = 0;

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

  // concatenate left and right
  return output.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

var para = document.querySelector('p');
var example = [12, 'test', 11, 7, 13, 14, 47, 88, 113];
// para.innerHTML = mergeSort(example);
