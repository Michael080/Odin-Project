# [understanding errors](https://www.theodinproject.com/lessons/foundations-understanding-errors)
## assignment/s
- [X] 1. read the following *mdn* articles:
  - [X] [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  - [X] [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - [X] [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

- [X] 2. Work through [“What went wrong? Troubleshooting JavaScript”](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong). Be sure to download their starter code that has intentional errors. 

## Knowledge Check
1. What are three reasons why you may see a TypeError?
- when attempting to pass an incompatible argument to a function
  - **wrong type**: apply `toUpperCase()` to a number, etc,.
  - **modify:** modify a const

2. What is the key difference between an error and a warning?
an error will interrupt execution of the script where warnings point to
potential issues that you may be able to ignore

3. What is one method you can use to resolve an error?
go to the line referenced by the error
