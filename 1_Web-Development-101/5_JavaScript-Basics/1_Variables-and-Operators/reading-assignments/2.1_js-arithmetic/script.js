// [JS Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

// Operators & Operands
let myNum = 100 + 10; // operand: `100`, operator: `+`

// addition
// let x = a + b;

// expressions
// let x = (100 + 50) * a;

// Operators (refresher, only new/forgotten info)
let modulus = 5 % 2; // modulus operator

let num1 = 1;
num1++;
let incremented = num1;
console.log("incremented: ", incremented);

// OR:
let num3 = 1;
num3 += 1;
console.log("using `+=` - num3: ", num3);

// Note the increment operator returns the current value (before incrementing)
let num2 = 2;
console.log("---\nNote the increment operator returns the current value (before incrementing)");
console.log("incrementing num2++ (where num2 == 2): ", num2++);


// Exponentiation
// **
let x1 = 5;
let z1 = Math.pow(x1,2);
console.log("via `**`: ", z1);
// pow
let x2 = 5;
let z2 = Math.pow(x2,2);
console.log("via `pow`: ", z2);


// Order of Precedence
let x3 = 100 + 50 * 3;
console.log("Which operation first? - `50*3`");
console.log("Multiplication & division come first");
console.log("---\nx3: ", x3)

// Increase precedence using parens ()
let x4 = (100 + 50) * 3;
console.log("---\nx4: ", x4);

// Left to right for *same precedence*
let x5 = 100 + 50 - 3;
// or:
let x6 = 100 / 50 * 3;
