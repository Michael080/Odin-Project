// Simple arrow function
let sum = (a, b) => a + b;

// If there is only one parameter the parenthesis
// can be ommitted
let double = n => n * 2;

// If no arguments parenthesis should be present
// but empty
let sayHi = () => alert('Hola!');

// Arrow functions can be used in the same way as
// function expressions
let age = prompt('What is your age?', 18)

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert('Greetings');

welcome();

// Example of a more complex multi-line arrow function
let sum = (a, b) => {
    let result = a + b;
    return result; // explicit return required when using
    //curly braces
};

alert(sum(1, 2));

// Exercise:
// Replace Function Expressions with arrow functions in
// the code below:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

// ANSWER:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    'Do you agree?',
    () => alert('You agreed.'),
    () => alert('You cancelled...')
);