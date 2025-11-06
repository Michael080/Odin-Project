# Variables & Operators
## [Assignments]()https://www.theodinproject.com/lessons/foundations-variables-and-operators#assignment)
- [1 - 6](https://www.theodinproject.com/lessons/foundations-variables-and-operators#assignment) - completed @ `./examples/`

**Reading etc,.:**
- [X] Read up on [variables in JavaScript](https://javascript.info/variables#variable-naming) from JavaScript.info.
- [X] This W3Schools lesson on [JavaScript arithmetic](https://www.w3schools.com/js/js_arithmetic.asp) followed by this on [JavaScript numbers](https://www.w3schools.com/js/js_numbers.asp), are good introductions to what you can accomplish with numbers in JavaScript.
    - [X] [JavaScript arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)
    - [X] [JavaScript numbers](https://www.w3schools.com/js/js_numbers.asp)
- [X] This MDN article on [JavaScript math](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) covers the same info from a slightly different point of view, while also teaching you how to apply some basic math in JavaScript. There’s much more that you can do with numbers, but this is all you need at the moment.
- [X] Read through (and code along with!) this article on [JavaScript operators](http://javascript.info/operators). Don’t forget to do the “Tasks” at the bottom of the page! It will give you a pretty good idea of what you can accomplish with numbers (among other things!) in JavaScript.

## Knowledge Check
- What three keywords can you use to declare new variables?
var, let, const

- Which of the three variable declarations should you avoid and why?
`var`, because it allows variable redeclaration w/in the same scope, and `var` declarations are *hoisted* which allows access before they are declared in the code. 

- What rules should you follow when naming variables?
Name must contain only letters, digits, or the symbols `$` and `_`, zero *reserved words*, and avoid non-latin chars. Create unique descriptive names that indicate the value stored. For constants use the `const` keyword and all caps for values known before runtime, otherwise use camel-case or snake-case (*for multi-word vars*).

- What happens when you add numbers and strings together?
They are concatenated.

- How does the Modulo (%), or Remainder, operator work?
*Modulo* returns the remainder of a division operation.

- What’s the difference between == and ===?
`===` or *strict equality* operator, returns true only if the *datatype* also matches.

- When would you receive a NaN result?
When performing a math operation on a non-number string or w/ `NaN` itself. 

- How do you increment and decrement a number?
`++` **increment**
`--` **decrement**
Via *prefix* or *postfix* syntax

- What’s the difference between prefixing and postfixing increment/decrement operators?
*Prefix* returns the result of **increment**/**decrement** immediately where *postfix* returns the original value (*prior to **increment**/**decrement**).

- What is operator precedence and how is it handled in JS?
*Operator precedence* determines the *default priority order* in which operators are executed.

- How do you access developer tools and the console?
    - **shortcut/s:** `ctrl`+`shift`+`i`/`c`
    - or via `Tools`, `More Tools` *via dropdown-menu*

- How do you log information to the console?
`console.log()`

- What does unary plus operator do to string representations of integers? eg. +”10”
Converts *datatype* to `Number` via **type coercion.
