// Default Parameters:

function showMessage(from, text="no text given") {
    alert( from + ": " + text);
}

// Pass showMessage() ONLY one parameter:
showMessage("Ann") // Ann: no text given
// Since only one param is passed in the default param value is used

// -------------------------------------------------------------------------

// More complex expressions can be used as default params such as functions:
function showMessages(from, text = anotherFunction()) {
    alert( from + ": " + text)
}

function anotherFunction() {
    return 'No second param foo'
}

showMessages('Wambo')




// ===========================================================================
// Functions ==  Comments
// Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.
//
// A separate function is not only easier to test and debug – its very existence is a great comment!
//
// For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.
//
// The first variant uses a label:

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert( i ); // a prime
    }
}

// The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}
