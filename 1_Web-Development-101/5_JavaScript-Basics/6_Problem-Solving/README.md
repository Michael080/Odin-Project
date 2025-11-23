# [Problem Solving](https://www.theodinproject.com/lessons/foundations-problem-solving)
## 3 Step Problem Solving Process
- Understand the problem
- Plan
- Pseudocode

### Understand the Problem
| *To gain clarity and understanding of the problem, write it down on paper, reword it in plain English until it makes sense to you, and draw diagrams if that helps. When you can explain the problem to someone else in plain English, you understand it.*

### Plan
The planning process may look similar to step 1 in that, you're plan should reflect your understanding. 

### Pseudocode
Write out the logic for a program in natural language.

## Divide & Conquer
Break the problem down into subproblems and start programming at the *"smallest or simplest one"*.

# Solve Fizz Buzz
| *"Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz."

## Planning
### Interface
Program will run in the browser console so no interface beyond that

### Inputs
*Fizz Buzz* prog. takes integer values as input from the user

### Outputs
non-integer ? => `ERROR`
divisible by `3` => `Fizz`
divisible by `5` => `Buzz`
divisible by `3` && `5` => `FizzBuzz`
all *other numbers* => print number

## Divide & conquer | *pseudocode*
1. take integer input
    - check format of input
        - handle incorrect inputs
2. Print values to screen
    - multiple of three?
        - Print `Fizz`
    - multiple of 5?
        - Print `Buzz`
    - multiple of both 5 & 3?
        - Print `FizzBuzz`

## Solution
Refer to script @ `./FizzBuzz/script.js`

## Assignments
1. Read [How to Think Like a Programmer - Lessons in Problem Solving](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)
2. Watch [How to Begin Thinking Like a Programmer](https://www.youtube.com/watch?v=azcrPFhaY9k)
3. Read [Pseudocode: What It Is and How to Write It](https://www.builtin.com/data-science/pseudocode)
