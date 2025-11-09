const string = "The revolution will not be televised.";
console.log(string);

// `''`, `""`, & ```` => valid string declaration syntax
goodString1 = 'imma just fine strang';
goodString2 = "imma just fine strang";
goodString3 = `imma just fine strang`;

console.log(goodString1,goodString2,goodString3);


// Template Literals
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);


// Concatenation in Context
const button = document.querySelector("button");

function greet() {
	// store user input
	const name1 = prompt("What is your name?");
	const greeting = document.querySelector("#greeting");
	greeting.textContent = `Hello ${name1}, nice to see you!`;
}

button.addEventListener("click", greet);


// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


// Multiline Strings
// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);


// Including quotes in strings
// ''
console.log('She be sayin "I think so!"');
// OR: ``
console.log(`She be sayin "I think so!"`);
// OR: \ (use escape char)
console.log("She be sayin \"I think so!\"");


// Conversions 
// num to string
const myNum2 = 123;
const myString2 = Number(myNum2);
console.log("test convert to num: " + typeof myString2);
// convert back to string
const myNum3 = String(myString2);
console.log("test convert to num: " + typeof myNum3);
