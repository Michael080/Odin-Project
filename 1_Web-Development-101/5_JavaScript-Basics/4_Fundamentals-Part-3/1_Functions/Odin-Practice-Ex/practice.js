// 1. Write a function called add7 that takes one number and returns
// that number + 7.
function add7(num) {
    return num + 7;
}

// console.log();
console.log(add7(7));

// Arrow function:
let add_seven = num => num + 7;

console.log(add_seven(7));


// 2. Write a function called multiply that takes 2 numbers and
// returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 7));

// Arrow function:
let multi = (num1, num2) => num1 * num2;

console.log(multi(2, 7));


// 3. Write a function called capitalize that takes a string and
// returns that string with only the first letter capitalized. Make
// sure that it can take strings that are lowercase, UPPERCASE or
// BoTh.
function capitalize(string) {
    if (typeof(string) != 'string') {
        console.log('No string here :(');
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}

console.log(capitalize(14));
console.log(capitalize('BLAMMO'));
console.log(capitalize('wammo'));


// 4. Write a function called lastLetter that takes a string and
// returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastLetter(string) {
    return string.slice(string.length - 1);
}

lastLetter('abcd');