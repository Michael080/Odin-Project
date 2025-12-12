// assert() - writes a message to console if expression evaluates to `false`, can be used as a simple test suite

// SYNTAX
// console.assert(<expression>, <message>)
// typically the message is going to be a string but any datatype can be passed in this "field", such as variable containing an array
let x = 10;
let y = 0;
console.assert(x + y === 11, 'Returned false'); // => `Assertion failed: Returned false`
console.assert(x + y === 10, 'Returned false'); // => nothing logged when `true`
// pass an array as the `message`
let message = [1, "uno", 2, "dos"];
console.assert(x + y === 11, message); // => message array


// count()

// SYNTAX
// console.count(<label>) => "<label>: <count>"

for (let i = 0; i < 3; i++) {
  console.count("myCount"); // =>
  // myCount: 1
  // myCount: 2
  // myCount: 3
}
// NOTE: works exactly the same outside of a loop


// error() - logs an error in same format as an automatically generated error, useful for testing, etc,.
console.error('You error prone sonuva\'');


// group() - groups log messages togther

// SYNTAX
// NOTE: groups messages appearing w/in `console.group()` & `console.groupEnd()`
console.group('BEGIN group'); // => prints w/ bold font
console.log('Im in a group');
console.log('bleep');
console.log('bloop');
console.groupEnd('END group'); // => does NOT print message


// groupCollapsed() - same as group() but prints "collapsed" in console, click carat to expand group
console.groupCollapsed('BEGIN collapsed group'); // => prints w/ bold font
console.log('Im in a group');
console.log('bleep');
console.log('bloop');
console.groupEnd(); // => does NOT print message


// info() - prints exactly the same as console.log() maybe useful for semantic reasons?
console.info("Hola worldo!");


// table() - prints table formatted message
const car1 = { name: "Audi", model: "A4" }
const car2 = { name: "Volvo", model: "XC90" }
const car3 = { name: "Ford", model: "Fusion" }

console.table([car1, car2, car3], ["model"]); // => prints model fields for each
console.table([car1, car2, car3], ["name", "model"]); // => prints name & model fields for each


// time() - logs time to complete lines between time() & timeEnd()
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
  i * 100;
}
console.timeEnd();


// trace() 
function func2(num) {
  //  return num + 1;
  return adder(1);
}

function func3(num) {
  //  return num + 1;
  return func2(adder(num));
}

function adder(num) {
  console.trace();
}

func3();
