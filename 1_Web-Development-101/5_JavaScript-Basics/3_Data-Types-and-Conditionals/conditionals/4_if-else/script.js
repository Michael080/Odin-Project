let year = 2015;

// single-line if 
if (year === 2015) console.log('You are righteous!');
// single-line ifs aren't best practice

// Boolean conversion:
// the if statement evaluates parens & converts result to boolean
if (1) { // 1 => truthy
	console.log('1 be truthy...');
}

// ternary operator `?`:
let age = 19;
let isAllowed;
let accessAllowed = (age > 18) ? isAllowed = true : isAllowed = false;
// OR => parens can be eliminated
accessAllowed = age > 18 ? isAllowed = true : isAllowed = false;

// chained ternaries
age = 18;
let message = age < 3 ? 'You a baby er sumthin' :
	age < 18 ? 'Hola senor' :
		age < 100 ? 'Top of the mornin Guvna' :
			'Typical :{';
console.log(message);

// ternary used as shorter equivalent to `if`
let company = 'Netscape';
company == 'Netscape' ?
	console.log('Right!') :
	console.log('Fail.');
// According to jsinfo the above is considered bad-practice, methinks as oppose to assigning to a variable as shown in the previous example `message`
//
// Here is a refactored ternary based on this interpretation:
company = 'Google';
// used to assign value to variable instead of running `console.log`
let jsCreator = company == 'Netscape' ?
	'Correcto\' Mundo!!!' :
	'Fail.';

console.log(`Was ${company} the creator of JavaScript? ${jsCreator}`)


// Tasks (Problems):
// 1. Will alert be shown?
if ("0") {
	console.log('Hello');
}
console.log("1. answ: yes")

// The name of JavaScript
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
let jsOfficialName = 'ECMAScript';
if (jsOfficialName == 'ECMAScript') {
	console.log('Right!');
} else {
	console.log('You don\'t know? ECMAScript!');
}

// 2. Using if..else, write the code which gets a number via prompt and then shows in alert:
let num = 0;
let result;
// 1, if the value is greater than zero,
if (num > 0) {
	result = 1;
	// -1, if less than zero,
} else if (num < 0) {
	result = -1;
} else { // 0, if equals zero. 
	result = 0;
}
console.log(`result: ${result}`);

// 3. Rewrite this if using the conditional operator '?':
result;
let a = 3;
let b = 2;

if (a + b < 4) {
	result = 'Below';
} else {
	result = 'Over';
}

a + b < 4 ?
	result = 'Below' :
	result = 'Over';

console.log(`result (ternary): ${result}`);

// OR as assignment
a = 1;
b = 2;
result = a + b < 4 ?
	'Below' :
	'Over';

console.log(`result (ternary as assignment): ${result}`);

// 4. Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

message;
let login = 'Employee';

if (login == 'Employee') {
	message = 'Hello';
} else if (login == 'Director') {
	message = 'Greetings';
} else if (login == '') {
	message = 'No login';
} else {
	message = '';
}

// rewritten as ternary
login = '';
let loginMessage = login == 'Employee' ?
	'Hello' : login == 'Director' ?
		'Greetings' : login == '' ?
			'No login' :
			'';

console.log(`loginMessage: ${loginMessage}`);
