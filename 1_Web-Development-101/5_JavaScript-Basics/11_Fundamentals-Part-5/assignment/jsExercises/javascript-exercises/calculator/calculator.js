function flatten(array) {
	return array.reduce((acc, val) => [...acc, ...val], []);
}

function add (...nums) {
	return nums.reduce((num1, num2) => num1 + num2);
}

function subtract (...nums) {
	return nums.reduce((num1, num2) => num1 - num2);
}

function sum (...nums) {
	nums.length > 0 ? nums = flatten(nums): nums = nums;
	const summer = (...nums) => nums.length > 0 ? add(...nums) : 0;
	return Number(summer(...nums));
}

function multiply (...nums) {
	const checkNested = val => val.some(elem => Array.isArray(elem));
	nums.length > 0 ? nums = flatten(nums): nums = nums;
	return nums.reduce((num1, num2) => num1 * num2);
}

function power(num, exp) {
	return num**exp;
}

console.log(power(2,3))
// !5 = 120
// 1 * 2 * 3 * 4 * 5
// 0, 1 , 2, 5, 10


function factorial(num) {
	let result = 1;

	if (num === 0) {
		return result;
	} else {
		for (let i = 1; i <= num; i++) {
			result *= i
		}
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}