"use strict";

// 1 Write a function called add7 that takes one number and returns that number + 7.
// add7(10) should return 17
const add7 = num => num + 7;
console.log(`add7(10): ${add7(10)} \n\n`);

// 2. Write a function called multiply that takes 2 numbers and returns their product.
// multiply(3, 2) should return 6
const multiply = (num1, num2) => num1 * num2;
console.log(`multiply(3, 2): ${multiply(3, 2)} \n\n`);

// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str) {
	// capitalize first letter ONLY
	return `${str[0].toUpperCase()}${str.slice(1, str.length).toLowerCase()}`
}
// capitalize("abcd") should return "Abcd"
console.log(`capitalize("abcd"): ${capitalize("abcd")}`);
// capitalize("ABCD") should return "Abcd"
console.log(`capitalize("ABCD"): ${capitalize("ABCD")}`);
// capitalize("aBcD") should return "Abcd"
console.log(`capitalize("aBcD"): ${capitalize("aBcD")} \n\n`);

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
const lastLetter = str => str[str.length - 1];
// lastLetter("abcd") should return "d"
console.log(`lastLetter("abcd"): ${lastLetter("abcd")}`);
