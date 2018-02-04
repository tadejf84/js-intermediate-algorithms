// fibonacci number is the sum of the previous two numbers in the fibonacci sequence

// fibonaacci with a loop
function fibonacci1(n) {
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

// fibonacci recursive
function fibonacci2(n) {
	if (n < 1) {
    return 0;
  } else if (n <= 2) {
    return 1;
  } else {
    return fibonacci2(n - 1) + fibonacci2(n - 2);
  }
}

var para = document.querySelector('p');
// para.innerHTML = fibonacci1(7);
para.innerHTML = fibonacci2(7);
