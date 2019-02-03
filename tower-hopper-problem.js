/*
* function hoppable should return minimum number steps if array is isHoppable
* if not hoppable, should return false
*/
function minJumpsToHop(arr, start, end) {
  let min = 999999, jumps;

  // start tower and end tower are the same
  if(start === end) {
    return 0;
  }

  // first step height is 0, tower is not hoppable
  if(arr[start] === 0) {
    return false;
  }

  // find min jumps
  for (let i = start + 1; i <= end && i <= start + arr[start]; i++) { 
    jumps = minJumpsToHop(arr, i, end);
    if(jumps != 999999 &&  jumps + 1 < min) {
      min = jumps + 1; 
    }
  } 

  // if array not hoppable, return false, else return min steps to hop
  if(jumps === false) {
    return false;
  } else {
    return min; 
  }

}



