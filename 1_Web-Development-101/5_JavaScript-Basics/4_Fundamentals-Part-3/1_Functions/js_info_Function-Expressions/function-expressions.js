// Function Expression
let sum = function(a, b) {
    return a + b;
};
// This function expression is ONLY accessible AFTER the execution
// Environment 'encounters' it as oppose to function declarations
// which are accessible anywhere in the code relative to the
// declaration, meaning that it can be called before it is defined.


// Example illustrating function block scope:
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

} else {

    function welcome() {
        alert("Greetings!");
    }

}

// ...use it later
welcome(); // Error: welcome is not defined
// Throws an error because welcome() is NOT w/in the Global-scope

// Another example:
let age = 16; // take 16 as an example

if (age < 18) {
    welcome();               // \   (runs)
                             //  |
    function welcome() {     //  |
        alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
                             //  |
    welcome();               // /   (runs)

} else {

    function welcome() {
        alert("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined


// How to make welcome visible w/in global-scope:
let age = prompt("What is your age?", 18);

let welcome; // welcome is initialized in the global scope and
            //  will now be accessible
if (age < 18) {

    welcome = function() {
        alert("Hello!");
    };

} else {

    welcome = function() {
        alert("Greetings!");
    };

}

welcome(); // ok now

// Or to simplify the code even further:
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };

welcome(); // ok now