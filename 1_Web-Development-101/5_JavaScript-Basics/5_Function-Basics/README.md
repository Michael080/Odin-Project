# [Function Basics](https://www.theodinproject.com/lessons/foundations-function-basics)
## Assignment/s
- [X] 1. [Functions - *MDN*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
    - [X] 1.1 [Functions Detailed Guide - *MDN (from section: "See Also")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [X] 2. [Return Values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
- [X] 3. [Function Basics - *JavaScript.info*](http://javascript.info/function-basics)
- [X] 4. [Function Expressions](http://javascript.info/function-expressions)
    - [X] [Arrow Functions](http://javascript.info/arrow-functions-basics)
- [X] 5. [JavaScript Call Stack](https://www.javascripttutorial.net/javascript-call-stack/)

### Write funcs
*[see `5_Function-Basics/assignments/exercises`](https://github.com/Michael080/Odin-Project/tree/master/1_Web-Development-101/5_JavaScript-Basics/5_Function-Basics/assignments/exercises)*

1. Write a function called add7 that takes one number and returns that number + 7.
2. Write a function called `multiply` that takes 2 numbers and returns their product.
3. Write a function called `capitalize` that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
4. Write a function called `lastLetter` that takes a string and returns the very last letter of that string:

## Knowledge Check
1. What are functions useful for?
- organizing code
- reusable blocks of code that can be called anywhere
- preventing *variable pollution*

2. How do you invoke a function?
`functionName(arg1, arg2);`

3. What are anonymous functions?
functions which are defined w/out a name:
```javascript
// basic syntax
(function() {
    console.log('Thing-a-majig');
});

// immediately invoked function expressions (IIFE)
(function() {
    console.log('Thing-a-majig');
})();
```

4. What is function scope?
- variables defined w/in a function are not accessible by global scope
- a function can access values defined w/in its own scope and w/in its parent's scope

5. What are return values?
- values returned by a function at completion of execution

6. What are arrow functions?
they are a type of function expression that use *arrow syntax*:
```javascript
let arrowFunc = arg => console.log('Me arg:', arg);
```

7. What is the difference between a function declaration and a function expression?
a *function expression* is a function stored as the value of a variable, *using same syntax as variable assignment, (w/out function name)*, they are not hoisted like *function declarations* are, but can be called in the same way, and can be *conditionally defined*
