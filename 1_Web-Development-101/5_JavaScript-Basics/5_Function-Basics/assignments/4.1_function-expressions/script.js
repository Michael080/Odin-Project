"use strict";

console.log('Becuase a function is a value they can be stored in vars');
// function expression example
let sayHi = function() {
	console.log('Hola \n\n');
};
// `;` is used because it is an *assignment statement*

// they can even be copied to new vars
let sayHola = sayHi;
sayHola(); // logs => Hola


// Callback functions
const showAffirmative = (question) => console.log(`"${question}": \nAffirmative\n\n`);
const showNegative = (question) => console.log(`"${question}": \nNegative`);
// alternative to confirm() pop-up in example
let confirmed = () => true;

function ask(question, yes, no) {
	console.log(`question: ${question}`);
	confirmed() ? yes(question) : no(question);
}

// pass callbacks: `showAffirmative` and `showNegative`
ask('No cap?!', showAffirmative, showNegative);

// for more concise code function expressions can be used when calling ask()
confirmed = () => false;
// this way the definition occurs when calling and are single-lines
ask(
	"Do you agree?",
	function() { console.log('Affirmative'); },
	function() { console.log('Nay!') }
);


// Hoisting
// this function can only be called AFTER declaration!
let sum = function(a, b) {
	return a + b;
};
// Note: Hoisting works because JavaScript reads function declarations first, thus function expressions DON'T hoist as they are **variable assignments** so the functions are created when the execution reaches them

// In strict mode, when a function declaration is w/in a code block, it's visible everywhere inside that block. But not outside of it.
let age = 18;

// conditionally declare a function
if (age < 18) {
	function welcome() {
		console.log('Hello!');
	}
} else {
	function welcome() {
		console.log('Greetings');
	}
	welcome(); // => this call works (see below for fail)
}

// ...use it later
// welcome(); // => !ERROR

// Solution - using a function expression and initialize the variable outside of
// the if block
age = 18;
let welcome; // assigned outside block

if (age < 18) {
	welcome = function() {
		console.log('Hola');
	}
} else {
	welcome = function() {
		console.log('Greetings Senor/ita');
	}
}

welcome(); // => this time function call succeeds!
