"use strict";

// TODO: take input
let input = prompt('Please enter a number');
// check input: valid integer, etc,. convert all inputs to number first
let number = parseFloat(input);

function isValid(value) {
	return Number.isInteger(number);
}

if (isValid(number)) {
	// check if num is divisible by 3 or 5
	const divisibleThree = num => num % 3 === 0;
	const divisibleFive = num => num % 5 === 0;

	function createMessage(num) {
		let message = '';
		// add Fizz for divisbility by 3 and Buzz for divisibility by 4
		divisibleThree(num) ? message += 'Fizz' : message += '';
		divisibleFive(num) ? message += 'Buzz' : message += '';
		// set number input as the message if not divisible by either
		!divisibleThree(num) && !divisibleFive(num) ? message = num : message += '';
		return message;
	}

	function fizzBuzz(num) {
		for (let i = 1; i <= num; i++) {
			console.log(createMessage(i));
		}
	}

	fizzBuzz(number);

} else { // handle incorrect inputs
	console.log(`${number} is not a valid integer, please try again`);
}
