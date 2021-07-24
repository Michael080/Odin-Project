const fibonacci = function(fibs) {
  fibs = Number(fibs);

  let result = 1;
  
  if (fibs === 1 || fibs === 2) {
    return result;
  } else if (fibs < 0) {
    return 'OOPS'
  }

  function Fibberer(fib1, fib2, tempStore) {
    this.fib1 = 1;
    this.fib2 = 1;

    this.fibber = function() {
      this.tempStore = this.fib2; // temp. store value for next iter.
      this.fib2 += this.fib1; // resultant value
      this.fib1 = this.tempStore;  // update fib1 w/ prev. fib2 val.
    }
  }

  const fibberer = new Fibberer(); // instantiate fibberer

  for (let i = 2; i < fibs; i++) {
    fibberer.fibber();
  }

  return fibberer.fib2;
}

fibonacci(3);

module.exports = fibonacci