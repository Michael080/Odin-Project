// [2.1 - JS Numbers](https://www.w3schools.com/js/js_numbers.asp)

// Scientific (exponent) notation
let nonExponent = 12300000;
let scientific = 123e5; // 12300000
console.log("scientific: ",scientific);

// decimal
let nonExponent1 = 12300000;
let scientific1 = 123e-5; // .00123
console.log("scientific1: ",scientific1);


// JavaScript Numbers are Always 64-bit Floating Point
// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
// 15 digits
let x = 999999999999999;   // x will be 999999999999999
// 16 digits (will round up) 
let y = 9999999999999999;  // y will be 10000000000000000
// The maximum number of decimals is 17
console.log("x: ", x);
console.log("y: ", y);	

let y1 = 99999999999999999;  // y will be 10000000000000000
let y2 = 100000000000000000;
console.log(y2);
console.log("y1 (over max of 17 digits): ", y1);


// Floating Precision
// Floating point arithmetic is NOT always accurate:
let x1 = 0.2 + 0.1;
console.log("x1: ", x1); // 0.30000000000000004 WRONG :(

// Convert to integer vals and back (to avoid errors):
let x2 = (0.2 * 10 + .1 * 10) / 10; 
console.log("x2: ", x2); // => 0.3 CORRECT!


// NaN - Not a Number
let x3 = 100 / "Booshee";
console.log("x3: ", x3); // => NaN

// NaN IS a number...ironically:
console.log("typeof NaN: ", typeof NaN); // => `number`


// Infinity
// is the value js returns when calculating a number outside the
// largest possible
let myNum = 2;
while (myNum != Infinity) {
	//myNum = myNum * myNum;
	myNum = myNum * myNum;
	console.log(myNum);
}

// OR (divide any number by `0`):
let x4 = 2 / 0; // # => Infinity
console.log("x4: ", x4);


// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let x5 = 0xFF; // => 255
console.log("x5 = 0xFF:", x5);

// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let myNum1 = 32;
console.log("base 32: ",myNum1.toString(32));
console.log("base 16: ",myNum1.toString(16));
console.log("base 12: ",myNum1.toString(12));
console.log("base 10: ",myNum1.toString(10));
