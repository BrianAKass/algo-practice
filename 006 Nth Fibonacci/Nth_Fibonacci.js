// O(2^n) Time | O(n) Space when not memoized
// O(n) Time | O(n) Space  when memoized

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result
  };
}

function getNthFib(n) {
  if (n == 2) {
    return 1;
  }
	if (n == 1) {
		return 0;
	}

  return getNthFib(n - 1) + getNthFib(n - 2);
}

getNthFib = memoize(getNthFib);



// Option Two

function getNthFib(n, memoize={1:0, 2:1}){
	if (n in memoize){
		return memoize[n];
	}else{
		memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
		return memoize[n];
	}
}

// Option Three

function getNthFib(n) {
  const lastTwo = [0,1];
	let counter = 3;
	while (counter <= n) {
		const nextFib = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1]; 
		lastTwo[1] = nextFib;
		counter++;
	}
	return n > 1 ? lastTwo[1] : lastTwo[0];
}
