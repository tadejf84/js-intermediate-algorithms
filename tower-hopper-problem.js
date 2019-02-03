/*
function hoppable should return optimal steps if array is isHoppable
if not hoppable, should return false
*/
function isHoppable(arr) {

  var len = arr.length;
  var steps = [];

  // check if height of tower at index 0 is 0
  // if so, array is not hoppable and return false
  if(arr[0] === 0) {
    return false;
  } else {
    steps.push(arr[0]);
  }

  for(var i = 0; i < len; i++) {
    var max = 0;
    for (var j = i + 1; j <= i + arr[i]; j++) {
      var step = arr[j] + j - i;
      if(step > max && arr[j] !== 0 && j < len) {
        max = step;
        i = j;
        steps.push(arr[j]);
      }
    }

    // check if already outside array
    sumAllSteps(steps);
    if(sum >= len) {
      return steps;
    }

  }
  return false;
}


/*
sum all steps in array
*/
function sumAllSteps(arr) {
  return sum = arr.reduce((a, b) => a + b, 0);
}


var arr = [1,2,2,0,1];
var para = document.querySelector('p');
para.innerHTML = isHoppable(arr);
