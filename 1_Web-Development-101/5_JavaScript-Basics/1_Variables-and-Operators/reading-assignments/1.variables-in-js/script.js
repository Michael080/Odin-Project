// [Variables in JavaScript](https://javascript.info/variables#variable-naming)

// Consts
// as aliases for color values
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log("color: ", color); // #FF7F00

// All CAPS Convention/s
// for values that are known before runtime (color vals, as above),
// use all caps, otherwise name "normally"
//
// Example:
//const pageLoadTime = /* time taken by a webpage to load */;
// because load-time is not known at runtime name camelCase

//------------------------------------------------------------------
// Problems

// [Working with variables](https://javascript.info/variables#working-with-variables)
// 1. Declare two variables: admin and name.
let admin,
name;
// 2. Assign the value "John" to name.
name = "John";
// 3. Copy the value from name to admin.
admin = name;
// 4. Show the value of admin using alert (must output “John”).
//alert(admin);
console.log("admin: ",admin);

// [Giving the right name](https://javascript.info/variables#giving-the-right-name)
// 1. Create a variable with the name of our planet. How would you name such a variable?
let NAME = "Terra";
// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUser = "Bob";

// [Uppercase const?](https://javascript.info/variables#uppercase-const)
// Examine the following code:
// js:
// `const birthday = '18.04.1982';`
// `const age = someCode(birthday);`
const BIRTHDAY = '18.04.1982'; // all CAPS const
// const age = someCode(BIRTHDAY); 
// `age` would be lowercase const as it is dependent on the current date
// in which `someCode()` is run

