function findCommonEl(arr1, arr2) {
  let el,
     exists = {},
     common = [];

  /*
  loop throught first and second array and compare
  if element from arr1 and arr2 are equal
  and element not yet in the exist object
  -> push in the common element array
  */
  for (let i of arr1) {
    el = i;
    for (let j of arr2) {
      if (el === j && !exists[j]) {
        common.push(el);
        exists[j] = true;
      }
    }
  }

  return common;
}

var para = document.querySelector('p');
var example1 = [1, 2, 4, 4, 6, 8, 11];
var example2 = [3, 5, 7, 8, 9, 10, 11, 12, 13];
// para.innerHTML = findCommonEl(example1, example2);
