function heapSort(arr) {
  var len = arr.length,
      last = len - 1;

  // 1. Build a max heap from the array
  buildMaxHeap(arr, len);

  // 2. Continue heap sorting until we have at least one element
  while(last >= 1) {
    swap(arr, 0, last);
    heapify(arr, 0, last);
    last--;
  }

  // 3. Return sorted array
  return arr;

}

// build a max heap out of all the elements of the array
// max heap is a binary tree where are all the parent nodes are larger or equal than their children
function buildMaxHeap(arr, len) {
  var i = Math.floor(len / 2 - 1);

  while (i >= 0) {
    heapify(arr, i, len);
    i--;
  }

}

// sort down from root to the end of the heap
// if violating the rule (parent node >= child node), correct it
function heapify(heap, i, len) {
  var root, left, right;

  while(i < len) {
    root = i;

    left = 2 * i + 1; // left child node
    right = 2 * i + 2; // right child node

    if (left < len && heap[left] > heap[root]) {
      root = left;
    }

    if (right < len && heap[right] > heap[root]) {
      root = right;
    }

    if (root == i) {
      return;
    }

    swap(heap, i, root);
    i = root;

  }
}

// swap elements in the array
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var para = document.querySelector('p');
var exampleArr = [20, 12, 18, 17, 13, 14, 11, 16, 19, 15];
// para.innerHTML = heapSort(exampleArr);
