// [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math)

// Numbers
const myInt = 5;
const myFloat = 6.667;
console.log("myInt type: ",typeof myInt);
console.log("myFloat type: ",typeof myFloat);


// Number Methods
const lotsOfDecimal = 1.7665849587;
// round to nearest two decimal places
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log("twoDecimalPlaces: ",twoDecimalPlaces);

// convert string to number
let myNumber = "74";
console.log("myNumber type: ",myNumber);
console.log("convert and sum: ",Number(myNumber) + 3);


// Increment/decrement 
// **Note:** increment/decrement (`++`/`--`), can ONLY be applied to values 
//           assigned to a varialbe. `3++;` will return an error.


// Sizing a Canvas
console.clear();
const canvas = document.getElementById("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

let x = (100 + 100) * 2 / 4;
console.log("x: ", x);
let y = x * 2;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;
