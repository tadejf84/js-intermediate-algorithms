function quickSort(arr, left, right){
  /* if not value yet for left and right, return these values */
  if (left == null) { left = 0};
  if (right == null) { right = arr.length - 1};

  let i = left, j = right;

  /* pick pivot at the middle of the array */
  const pivotIndex = Math.floor((left + right) / 2);
  const pivotVal = arr[pivotIndex];

  /* check initial user input */
  if (arr.length === 0) { return 'You entered an empty array!'; }
  if (arr.length < 2) { return arr; }

  /*
  while left array elememnt value lower than pivot index and
  while right array element value higher than pivot index continue
  -> when this condition is not true anymore, break the while loop
  -> swap the element in the left array with the element in the right array
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

/* helper function swap */
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

var para = document.querySelector('p');
const exampleArr = [20, 12, 18, 17, 13, 14, 11, 16, 19, 15];
// para.innerHTML = quickSort(exampleArr);
