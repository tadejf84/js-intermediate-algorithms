function quickSort(arr, left, right){
  var pivotIndex = Math.floor((left + right) / 2);
  var pivotVal = arr[pivotIndex];
  var i = left, j = right;

  if (arr.length === 0) {
    return 'You entered an empty array!';
  }

  if (arr.length < 2) {
    return arr;
  }

  while (i <= j) {
    while(arr[i] < pivotVal) {
      i++;
    }
    while(arr[j] > pivotVal) {
      j--;
    }
    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
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



var para = document.querySelector('p');
var exampleArr = [20, 12, 18, 17, 13, 14, 11, 16, 19, 15];
var first = 0;
var last = exampleArr.length - 1;
para.innerHTML = quickSort(exampleArr, first, last);
