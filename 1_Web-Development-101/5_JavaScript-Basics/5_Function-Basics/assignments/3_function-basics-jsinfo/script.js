"use strict";

// Default values - a function can be defined as a default argument
const basicBiyatch = () => 'You basic :{'; // to be used as "default"
// set basicBiyatch as default argument for param: `text`
function showInsult(from, text = basicBiyatch()) {
	console.log(`Your friend ${from} would like to tell you:\n"${text}"`);
}

// Alternative default params - if assigning of default params is desired at a later stage
function showMessage(text) {
	/*if (text === undefined) {
		text = 'empty message';
	}*/
	// OR (single-line)
	text = text || 'empty message'; // better syntax imo
	console.log(`text: ${text}`);
}
showMessage('has args...');
showMessage(); // => 'empty message'

// a function w/ a "blank return" returns `undefined`
function noReturn() {
	const sum = 1 + 1;
}
let dumbValue = noReturn();
console.log(`dumbValue: ${dumbValue} \n\n\n`); // => undefined


// long return *trick* - if you want to put a long return statement on a separate line use parens:
function longReturn() {
	// if attempt w/out parens `return` assumes `;` and will return `undefined`
	return (
		"thing" + "a" + "majiggy" + "is too damn" + "frickin"
		+ "long"
	)
}
console.log(`longReturn(): ${longReturn()}`);


// Exercises (tasks):
// 1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		// ...
		return confirm('Did parents allow you?');
	}
}

// Will the function work differently if else is removed?

function checkAge(age) {
	if (age > 18) {
		return true;
	}
	// ...
	return confirm('Did parents allow you?');
}
// 1. answ: no, else can be removed and will function the same

// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Did parents allow you?');
	}
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAge(age) {
	age > 18 ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
	age > 18 || confirm('Did parents allow you');
}

// 3. Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
const min = (a, b) => a >= b ? b : a;

console.log(`min(2, 5): ${min(2, 5)}`) // == 2
console.log(`min(3, -1): ${min(3, -1)}`); // == -1
console.log(`min(1, 1): ${min(1, 1)} \n\n`); // == 1

// 4. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// ensure only integers used as args
const checkIntegers = (x, n) => Number.isInteger(x) && Number.isInteger(n);

function pow(x, n) {
	if (!checkIntegers(x, n)) {
		console.log(`Please use integers ONLY :{`);
		return;
	}

	let result = x;
	for (let i = n - 1; i > 0; i--) {
		result *= x;
	}

	return result;
}

console.log('#3 - Function pow(x,n):');
console.log(`pow(3, 2): ${pow(3, 2)}`); // = 3 * 3 = 9
console.log(`pow(3, 3): ${pow(3, 3)}`); // = 3 * 3 * 3 = 27
console.log(`pow(1, 100): ${pow(1, 100)} \n\n`); // = 1 * 1 * ...* 1 = 1
console.log(`pow(1.1, 2): ${pow(1.1, 2)}`);
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.
