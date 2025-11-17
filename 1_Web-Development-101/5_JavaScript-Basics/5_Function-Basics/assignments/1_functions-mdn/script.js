// Built-in Browser Functions
const myArray = ["I", "love", "chocolate", "frogs"];
console.log('joined array:', myArray.join(" "));
console.log('joined array w/out param:', myArray.join());


// Function declaration
// can be called before definition thanks to "hoisting"
myFunc();

function myFunc() {
	console.log('me funcay');
}


// default parameter
function hola(name = "Julio") {
	console.log(`Hello ${name}`);
}

hola(); // via default => "...Julio"
hola('Bob');


// Anonymous & Arrow Functions
// anonymous func aka "function declaration" ("defined" but not called)
(function() {
	console.log('hello');
});

// keylogger
function logKey(event) {
	console.log(`You pressed "${event.key}"`);
}

let body = document.querySelector("body");
body.addEventListener("keydown", logKey);

// OR: instead of defining logKey, pass an anonymous function instead
body = document.querySelector("body");
body.addEventListener("keydown", function(event) {
	//console.log(`key via 'event': "${event.key}".`);
	return event.key;
});


// Arrow functions
// Same as above but w/out "function()..."
body.addEventListener("keydown", event => {
	console.log(`You pressed "${event.key}".`);
});

// functions, like above, can be written as one-liners if they consist only of a return value:
const og = [1, 2, 3];
const doubled = og.map(item => item * 2);
console.log("doubled: ", doubled);

// complete working example of the keylogger hooked into some html
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", event => {
	output.textContent = `You pressed "${event.key}".`;
});
