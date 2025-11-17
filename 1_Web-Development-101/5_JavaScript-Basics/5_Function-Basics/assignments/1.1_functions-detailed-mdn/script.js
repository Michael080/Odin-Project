"use strict";
// //
// Functions Detailed Guide
// //

// object mutation - when a function changes an object/variable/array, which are declared in the global scope, those changes are accessible w/in the global scope

let auto;

function myFunc(theObject) {
	theObject.make = "Toyota";
}

function tstFunc(dafuk) {
	dafuk.make = "thang";
}

function makerizer(my) {
	my.make = "Toyota";
	//	auto = 'whip!';
}

let car = {
	name: 'GT',
	make: 'BMW'
};

makerizer(car);
console.log("car, auto: ", car.make, auto); // => Toyota whip!


// Scope chains via nested declarations & expressions:
function addSquares(a, b) {
	function square(x) {
		return x * x;
	}
	return square(a) + square(b);
}

console.log(`addSquares(): ${addSquares(2, 2)}`);


// Function expresses
const square = function(number) {
	return number * number;
}
console.log(`square(4): ${square(4)}`);

// Create a map function which takes function and array
function map(func, arr) {
	const result = new Array(arr.length);
	for (let i = 0; i < result.length; i++) {
		result[i] = func(arr[i]);
	}
	return result;
}

// numbers to be cubed
const numbers = [0, 1, 2, 5, 10];
// cube numbers via new function map()
const cubedNumbers = map(function(x) {
	return x * x * x;
}, numbers);

console.log(`cubedNumbers: ${cubedNumbers}`);

// functions can be be defined based on conditions
let isGerman = true;
let myCar;
if (isGerman) {
	myCar = function(vehicle) {
		vehicle.make = 'BMW';
	};
	myCar(car);
}


// Recursive functions
// replicate the following loop in a func:
let x = 0;
while (x < 10) {
	// do stuff
	x++;
}

// as func
function loop(x) {
	if (x >= 10) {
		return;
	}
	console.log(`x: ${x}`); // do stuff
	loop(x + 1); // iterate
}

loop(1);

// retrieving all nodes of a tree is best accomplished via recursion:
// retrieve dom nodes
const tree = document.getElementById('tree');

function walkTree(node) {
	if (node === null) {
		return;
	}
	console.log(`node: ${node.nodeName}`); // do stuff

	// loop over element children if any
	for (const child of node.childNodes) {
		walkTree(child);
	}
}
console.log("\n\n");
// could loop over body to cover entire DOM
walkTree(tree); // "walk" div#tree


// The function stack
function foo(i) {
	if (i < 0) {
		return;
	}
	console.log(`begin: ${i}`);
	foo(i - 1);
	console.log(`end: ${i}`);
}
console.log("\n\n");
foo(3);


// Immediately Invoked Function Expressions (IIFE)
(function() {
	console.log('Yo: from IIFE');
})();

// OR:
const value = (function() {
	const result = 2 * 2;
	return result;
})();
console.log(`value: ${value}`);
// almost equivalent to assigning variable to a function body but w/ 
// unique benefits:
// - creates private scopes & prevents global namespace pollution
// - It is now an expression instead of a sequence of statements. This allows you to write complex computation logic when initializing variables.


// Closure
// The outer function defines a variable called "name"
const pet = function(name) {
	const getName = function() {
		// The inner function has access to the "name" variable of the outer function
		return name;
	};
	return getName; // Return the inner function, thereby exposing it to outer scopes
}
const vivie = pet("Vivie");
console.log(`vivie(): ${vivie()} \n\n\n`);

// An object containing methods for manipulating the inner variables of the outer function can be returned.
const createPet = function(name) {
	let sex;

	const pet = {
		// setName(newName) is equivalent to setName: function (newName)
		// in this context
		setName(newName) {
			name = newName;
		},

		getName() {
			return name;
		},

		setSex(newSex) {
			if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
				sex = newSex;
			}
		},

		getSex() {
			return sex;
		},
	};

	return pet;
}

const myPet = createPet('Vivie');
console.log(`myPet.getName(): ${myPet.getName()}`); // => Vivie

// reset name + set sex
myPet.setName('Oliver');
myPet.setSex('male');
console.log(`myPet.getSex(): ${myPet.getSex()}`); // => male
console.log(`myPet.getName(): ${myPet.getName()} \n\n\n`); // => Oliver
// The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with

// The inner functions do not have to be assigned to a var or have a name:
const getCode = (function() {
	const apiCode = '0][Eal(eh&2)]'; // code not to be modified by outsiders!

	return function() {
		return apiCode;
	};
})(); // via IIFE
console.log(`getCode(): ${getCode()} \n\n\n`);


// Multiply-nested functions
// scope chaining ex:
function A(x) {
	console.log(`A (scope)- x: ${x}`);
	//~~console.log(`A (scope) - y: ${y}`);~~
	//~~console.log(`A (scope) - z: ${z}`);~~
	function B(y) {
		console.log(`B (scope) - x: ${x}`);
		console.log(`B (scope) - y: ${y}`);
		//~~console.log(`A (scope) - z: ${z}`);~~
		function C(z) {
			console.log(`C (scope) - x: ${x}`);
			console.log(`C (scope) - y: ${y}`);
			console.log(`C (scope) - z: ${z}`);
			console.log(`x + y + z: ${x + y + z} \n\n\n`);
		}
		C(3);
	}
	B(2);
}
A(1);


// Name conflicts
// 
function outside() {
	const x = 5; // never read by inside
	console.log(`outside scope - x: ${x}`);
	function inside(x) {
		console.log('inside scope takes precedence:');
		console.log(`inside scope - x: ${x}`);
		return x * 2;
	}
	// outside()() <-- last parens not possible w/out returning `inside`
	return inside;
}

console.log(`outside()(10): ${outside()(10)} \n\n\n`);


// The Arguments Object - useful if number of arguments to be used is unknown in advance
// takes separator as first arg. followed by items to be separated
function myConcat(separator) {
	let result = ""; // initialize list
	for (let i = 1; i < arguments.length; i++) {
		console.log(`arguments [${i}]: ${arguments[i]}`);
		result += arguments[i] + separator;
	}
}
myConcat("--", ", ", "red");
// **Note:** The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does not possess all of the array-manipulation methods.


// Parameter syntax: default & rest parameters
// default - if `b` not provided defaults to `1`
function multiply(a, b = 1) {
	return a * b;
}
console.log(`multiply(2): ${multiply(2)} \n\n\n`);

// Rest parameters - allow representation of an indefinite number of arguments as an array
// use *rest parameters* to collect arguments from the second one to the end:
function mult(multiplier, ...meArgs) {
	// multiplier * arg1, multiplier * arg2, etc,.
	return meArgs.map((x) => multiplier * x);
}
// multiplier 2 against args: 3 & 4
console.log(`mult(2, 3, 4): ${mult(2, 3, 4)}`);


// Arrow functions:
// sleep function to test the below code:
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function pauseExecution() {
	console.log("Timer starts");
	await sleep(2000); // Pauses for 2 seconds
	console.log("Timer ends");
}

// - does not have `this`, `arguments`, `super`, or `new.target`
const elementsArr = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
// "long-version"
const elemLength = elementsArr.map(function(s) {
	return s.length;
});

// shortened using arrow func:
const elemLength2 = elementsArr.map((s) => s.length);

// No separate `this`
function Person() {
	// The Person() constructor defines `this` as itself.
	this.age = 0;

	this.ageUp = () => {
		this.age++;
	}

	setInterval(function growUp() {
		// In nonstrict mode, the growUp() function defines `this`
		// as the global object, which is different from the `this`
		// defined by the Person() constructor.
		this.age++;
	}, 1000);
}

//pauseExecution();
const p = new Person();
console.log('growUp() doesnt increase age on this.p')
console.log('wait a few seconds then (in console) check \'p.age\'');
// pause for 2 seconds, age 

// An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:
function Person2() {
	this.age = 0;

	setInterval(() => {
		this.age++; // `this` properly refers to the person object
	}, 1000);
	//pauseExecution();
}
const r = new Person2();
console.log('wait a few seconds then (in console) check \'r.age\'');
