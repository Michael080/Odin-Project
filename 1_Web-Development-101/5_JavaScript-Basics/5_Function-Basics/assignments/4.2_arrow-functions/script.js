"use strict";

// Arrow functions, the basics

// syntax
let func = (arg1, arg2) => arg1 * arg2;
// above is a shortened version of:
let func2 = function(arg1, arg2) {
	return arg1 * arg2;
}

// parenthesis can be omitted for functions w/ only one parameter:
let double = n => n * 2;
// parenthesis can't be ommitted for functions w/ zero parameters:
let sayHi = () => console.log('Hola');

// just as function expressions can, arrow functions can also be created dynamically
let age = 18;

let welcome = (age < 18) ?
	() => console.log('Hello') :
	() => console.log('Greetings');

welcome();


// Multiline arrow funcs
// unlike single line arrow funcs, require return statement
let sum = (a, b) => {
	return a + b;
}


// Exercises (tasks):

// 1. Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}
// *commented to prevent prompt for answer*
/* ask(
	"Do you agree?",
	function() { alert("You agreed."); },
	function() { alert("You canceled the execution."); }
);*/
let query = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
}
// *commented to prevent prompt for answer*
/*query(
	"Do you agree?",
	function() { alert("You agreed."); },
	function() { alert("You canceled the execution."); }
);*/
