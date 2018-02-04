function findCommonEl(arr1, arr2) {
  var i, j, el,
     len1 = arr1.length,
     len2 = arr2.length,
     exists = {},
     common = [];

  // loop through first array
  for (i = 0; i < len1; i++) {
    el = arr1[i];

    // loop through second array and compare
    for (j = 0; j < len2; j++) {
      if (el === arr2[j] && !exists[arr2[j]]) {
        common.push(el);
        exists[arr2[j]] = true;
      }
    }

  }

  return common;

}

var para = document.querySelector('p');
var example1 = [1, 2, 4, 4, 6, 8, 11];
var example2 = [3, 5, 7, 8, 9, 10, 11, 12, 13];
para.innerHTML = findCommonEl(example1, example2);
