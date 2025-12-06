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
- [X] 1. Read [How to Think Like a Programmer - Lessons in Problem Solving](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)
- [ ] 2. Watch [How to Begin Thinking Like a Programmer](https://www.youtube.com/watch?v=azcrPFhaY9k)
- [X] 3. Read [Pseudocode: What It Is and How to Write It](https://www.builtin.com/data-science/pseudocode)

### Assignment #3 - Pseudocode: What it is and How to Write it
#### Main Constructs
1. **`SEQUENCE`** represents linear tasks sequentially performed one after the other
2. **`WHILE`** is a loop w/ a *condition at its beginning*
3. **`REPEAT-UNTIL`** is a loop w/ a *condition at the bottom*
4. **`FOR`** is another form of looping
5. **`IF-THEN-ELSE`** is a conditional statemnt changing the flow of the algorithm
6. **`CASE`** is the generalization form of **`IF-THEN-ELSE`**

#### Pseudocode Constructs
               **SEQUENCE**
| Type/Category |       Construct       |
| ------------- | --------------------- |
| Input         | `READ`, `OBTAIN`, `GET`|
| Output        | `PRINT`, `DISPLAY`, `SHOW  `|
| Compute       | `COMPUTE`, `CALCULATE`, `DETERMINE `|
| Initialize    | `SET`, `INIT`|
| Add           | `INCREMENT`, `BUMP`|
| Sub           | `DECREMENT`|

```bash
                  **FOR**
FOR iteration bounds
sequence
ENDFOR

                  **WHILE**
WHILE condition
sequence
ENDWHILE

                  **CASE**
CASE expression OF
condition 1: sequence 1
condition 2: sequence 2
OTHERS:
default sequence
ENDCASE

                **REPEAT-UNTIL**
REPEAT
sequence
UNTIL condition

                **IF-THEN-ELSE**
IF condition THEN
  sequence 1
ELSE
  sequence 2
ENDIF
```

##### Extra Pseudocode Constructs
          **CALLING CLASSES/FUNCTIONS**
```bash
CALL AvgAge with StudentAges
CALL Swap with CurrentItem and TargetItem
CALL getBalance RETURNING aBalance
CALL SquareRoot with orbitHeight RETURNING nominalOrbit
```
          **EXCEPTION HANDLING**
```bash
BEGIN
    statements
    EXCEPTION
        WHEN exception
            statements to handle the exception
        WHEN another exeption
            statements to handle the exception
    END
```

### How to Write Pseudocode
1. **Always** capitalize the initial word (*often one of the main six constructs*).
2. Make only one statement per line.
3. Indent to show hierarchy, improve readability and show nested constructs.
4. **Always** end multi-line sections using any of the `END` keywords (`ENDIF`, `ENDWHILE`, etc.).
5. Keep your statements programming language independent.
6. Use the naming domain of the problem, not that of the implementation. For instance: *“Append the last name to the first name” instead of “name = first+last.”*
7. Keep it simple, concise and readable.

### Pseudocode Example
Quiz program that determines passing grade as: 80% (8 of 10 questions). And displays message about pass/fail result of quiz.

```bash
IF employee gets eight or more questions correct
    Display mesage: "Congratulations, you passed!"
    Transition to printable certificate of completion page
ELSE
    Display message: "Try again"
    Transition back to first page of quiz
```

## Knowledge Check
1. What are the three stages in the problem solving process?
- 1. plan
- 2. pseudocode
- 3. divide & conquer

2. Why is it important to clearly understand the problem first?
w/out understanding the problem there is now way of verifying it has even been solved

3. What can you do to help get a clearer understanding of the problem?
- write it down on paper in *plain English*
- draw diagrams
- if you can explain the problem to someone in plain English, you understand it

4. What are some of the things you should do in the planning stage of the problem solving process?
- consider ui functionality, appearance, etc,. sketch out ui
- inputs
  - source/s: user? other program?
- output
  - given the inputs, what steps are required to produce desired output? 

5. What is an algorithm?
- a series of steps for solving a particular problem

6. What is pseudocode?
the logic of a program written in natural language, *can be more or less strict in terms of formatting*

7. What are the advantages of breaking a problem down and solving the smaller problems?
breaking the problem down is the best way to deal w/ complexity
