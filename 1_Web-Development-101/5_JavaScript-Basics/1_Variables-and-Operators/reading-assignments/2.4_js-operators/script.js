// [Basic operators, maths](https://javascript.info/operators)

// An operator is unary if it has a single operand:
let x = 1;
x = -x; // <-- unary operator
console.log("x: ", x);

// An operator is binary if it has a two operand:
let y = 3;
x = -x; // make positive
// `-` is a binaray operator:
console.log("y - x = ", y - x); 


// Type Coercion
// Every operator will convert strings with number values to
// numbers except for `+` as a binary operator (`+` WILL coerce types 
// when applied as a unary operator) 
// Ex:
console.log("'75' + 100 = ",'75' + 100); // concatenates => `75100`
console.log("'100' - 25 = ", '100' - 25); // subtracts => `75`

console.log("typeof '1' v. typeof +'1': ", typeof '1', typeof +'1');
// OR (another example):
let apples = "2";
let oranges = "3";

console.log(+apples + +oranges); // => 5!


// Increment/Decrement
// Postfix vs Prefix Forms
// postfix -
let counter = 2;
// `counter` will be incremented but the original value is returned:
console.log("counter++ postfix: ",counter++); // => 2
// verify:
console.log("again",counter); // => 3

// prefix -
counter = 2;
// `++counter` returns the "updated" value:
console.log("++counter prefix: ",++counter); // => 3

// In summary, prefix form must be used only in situations where the result
// of the operator is to be used immediately.
// Example of "use immediately":
counter = 0;
console.log(1 + ++counter); // => 2


// Comma
// allows evaluation of several expressions divided by a comma. Each
// of them is evaluated but only the result off the last one is returned.
let a = (1 + 2, 3 + 4);
console.log("a: ", a); // => 7

// can even be combined w/ a second assignment
let b = (c = 5 * 2, c + 2); // => 12
console.log("b: ", b);


// Tasks
// [The postfix and prefix forms](https://javascript.info/operators#the-postfix-and-prefix-forms)
// What are the final values of all variables a, b, c and d after the code below?
let a1 = 1, b1 = 1;
let c1 = ++a1; // c1 === 2
let d1 = b1++; // d1 === 1
console.log("Answer: a1: 2, b1: 2, c1: 2, d1: 1");
console.log("Check answers: ", a1, b1, c1, d1); // Got IT! => 2,2,2,1

// [Assignment result](https://javascript.info/operators#assignment-result)
// What are the values of a and x after the code below?
let a2 = 2;
let x1 = 1 + (a2 *= 2);
console.log("Answer -- a2:4, x1:5");
console.log("Check answers: ", a2, x1); // => Got IT! => 4,5

// [Type conversions](https://javascript.info/operators#type-conversions)
// What are results of these expressions?
console.log("'' + 1 + 0 = (answ: 10)", "" + 1 + 0); // 10 => CORRECT
console.log("true + false = (answ: 1)",true + false) // 1 => CORRECT
console.log("6 / '3' = (answ: 2)",6 / "3"); // 2 => CORRECT
console.log("'2' * '3' = (answ: 6)", "2" * "3"); // 6 => CORRECT
console.log("4 + 5 + 'px' = (answ: '9px')",4 + 5 + "px"); // '9px' => CORRECT
console.log("'$' + 4 + 5 = (answ: '$45')", "$" + 4 + 5); // '$45' => CORRECT
console.log("'4' - 2 = (answ: 2)",'4' - 2); // 2 => CORRECT 
console.log("'4px' - 2 = (answ: NaN)","4px" - 2); // NaN => CORRECT!
console.log("'  -9  ' + 5 = (answ: -9 5)","  -9  " + 5); // '-9 5' => CORRECT!
console.log("null + 1 = (answ: null)",null + 1); // null => WRONG ANSW: 1
console.log("undefined + 1 = (answ: undefined)",undefined + 1); // undefined => WRONG ANSW: NaN
" \t \n" - 2

// [Fix the addition](https://javascript.info/operators#fix-the-addition)
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is `12` (for default prompt values).
// Why? Fix it. The result should be `3`.
let a3 = prompt("First number?", 1);
let b2 = prompt("Second number?", 2);

console.log("fix me: ",a3 + b2); // 12 => fix me!
console.log("fixed: ",+a3 + +b2); // 
