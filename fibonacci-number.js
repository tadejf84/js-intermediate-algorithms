// fibonacci number is the sum of the previous two numbers in the fibonacci sequence

function fibonacci(n) {
  var i, prev1, prev2, fib;

  for(var i = 0; i <= n; i++) {
    if (i === 0) {
      prev1 = 0;
      fib = prev1;
    } else if (i === 1) {
      prev2 = 1;
      fib = prev2;
    } else {
      fib = prev1 + prev2;
      prev1 = prev2;
      prev2 = fib;
    }
  }

  return fib;

}

var para = document.querySelector('p');
// para.innerHTML = fibonacci(7);
