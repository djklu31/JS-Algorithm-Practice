//1,1,2,3,5,8,13,21

function fib(num) {
  if (num < 2) {
    return 1;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}

function fibCache(num, cache) {
  console.log(cache);

  cache = cache || [];

  if (cache[num]) {
    return cache[num];
  } else {
    if (num < 3) {
      return 1;
    } else {
      cache[num] = fibCache(num - 1, cache) + fibCache(num - 2, cache);
    }
  }
  return cache[num];
}

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

//   console.log(fibMemo(355));

function fibonacci(num) {
  let start = 1;
  let prev = 0;
  let current = 0;

  if (num === 1) {
    return 1;
  } else if (num === 0) {
    return null;
  }

  for (let i = 1; i < num; i++) {
    current = start;
    start = start + prev;
    prev = current;
  }

  return start;
}
// console.log(fib(38));
console.log(fibCache(588));
