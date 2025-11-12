# [Data Types & Conditionals  |  JS Basics](https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals)
## Unit Lessons
### Strings
- [X] [MDN tutorial on strings in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [X] [the W3Schools lesson on string methods](https://www.w3schools.com/js/js_string_methods.asp)
- [X] [W3Schools lesson on string methods](https://www.w3schools.com/js/js_string_methods.asp)
- [X] [MDN documentation for strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Conditionals
- [X] [Comparisons | *JavaScript.info*](http://javascript.info/comparison)
- [X] [Logical Operators *JavaScript.info*](http://javascript.info/logical-operators)
- [X] [Conditionals | *MDN*](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [X] [if/else (covers same basic concept: *read as a review*)| *JavaScript.info*](http://javascript.info/ifelse)
- [X] [`switch` statement | *JavaScript.info*](https://javascript.info/switch)

## Assignments
1. Follow the instructions in the README of our javascript-exercises repository to set up your local environment. Once you have forked the repository, cloned it and installed Jest, review each README file prior to completing the following exercises in order:
`01_helloWorld` (This exercise is intentionally very beginner-friendly to ensure that you have everything set up properly!)
`02_addNumbers`
`03_numberChecker`
`04_mathEquations`
`05_joinStrings`

### Install Jest *from `javascript-exercises/README.md`
| *Jest installation: After cloning this repository to your local machine and installing `npm`, go into the newly created directory (`cd javascript-exercises`) and run `npm install`. This will install Jest and set up the testing platform based on our preconfigured settings. (Note: if you get warnings that packages are out of date or contain vulnerabilities, you can safely ignore them for these exercises.)*

## Knowledge Check
1. What are the eight data types in JavaScript?
- object, string, number, boolean 
- bigint: *for integers of arbitrary length*
- null: *for unknown values - a standalone type that has a single value*, *can be used assign "empty" or "unknown" value to a variable*
- undefined: *for unassigned values - a standalone type that has a single value*
- symbol: *for unique identifiers*

2. Which data type is NOT primitive?
object

3. What is the relationship between null and undefined?
They are both *standalone types* which have single values: `null`/`undefined`

4. What is the difference between single, double, and backtick quotes for strings?
- single/double: are the same but you are more likely to encounter the need for usage of *escape chars*
- backtick: enables the use of **template literals**

5. What is the term for joining strings together?
concatenate

6. Which type of quote lets you embed variables/expressions in a string?
template literals

7. How do you embed variables/expressions in a string?
```javascript
const thang = 'thang';
const width = 4;
const length = 20;
let literal = `Check out my ${thang} it's ${width * length} squared!`
```

8. How do you use escape characters in a string?

```javascript
let escapeQuotes = 'Then Bob declared \'Let there be light!\'';
let newline = 'Some text\nTo a newline';
let literalBackslash = 'C:\\';
```

9. What is the difference between the slice/substring string methods?
`substring` starts at 0 when using negative values, whereas `slice` counts from the end of the string 

10. What are the three logical operators, and what do they stand for?
`&&`: *AND* operator, evaluates `true` if both values are truthy
`||`: *OR* operator, returns `true` if any arguments are truthy
`!`: *NOT* operator, returns the inverse boolean value of an argument

11. What are the comparison operators?
`>`/`<`: greater/less-than
`==`: equality
`!`: not

12. What are truthy and falsy values?
- truthy: more or less true, indicates a value e.g. *string "Bob"* is truthy
    - `1`, `true`, any non-falsy value
- falsy: more or less false e.g. *string "" empty string is falsy;
    - `0`, `false`, `undefined`

13. What are the falsy values in JavaScript?
`undefined`/`null`/`NaN`, empty strings, & `false`

14. What is the syntax for an if/else conditional?
```javascript
if (expression){
    // code
} else {
    // code
}
```
15. What is the syntax for a switch statement?
```javascript
switch(expression) {
    case option1:
        // execute code;
        break;
    case option2:
        // execute code;
        break;
    default:
        // if no matches execute this
        break;
}
```

16. What is the syntax for a ternary operator?
expression ? true : false;

17. What is nesting?
Placement of execution contexts w/in existing execution context such as an if/else w/in an if-block.
