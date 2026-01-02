# [Clean Code](https://www.theodinproject.com/lessons/foundations-clean-code)
## Assignment/s
- [X] 1. [**Reading**  |  *10 Principles for Keeping Your Programming Code Clean*](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)
- [X] 2. *Code Comment Best Practices*
    - [X] [**Reading**  |  *comments telling us why code works*](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)
    >[!TLDR;] *Code can only tell you how the program works; comments can tell you why it works.* **- Jeff Atwood**
    - [X] [**Reading**  |  *code without comments*](https://blog.codinghorror.com/coding-without-comments/)

## Knowledge Check
1. Why is it important to write clean code?
Code should be easy to read and maintain

2. What are some good principles for keeping code clean?
- consistent formatting
- naming conventions
    - descriptive/understandable
    - **verbs** for function names
    - **nouns** for variables
- comments where code readability can't be improved, or for providing context around decision making

3. What is the difference between good comments and bad comments?
Good comments are those applied when the readability of the code can't be improved. Bad comments explain what the code should already explain on its own.

## Add'l Resources
- [A nice op-ed on code as documentation](https://www.martinfowler.com/bliki/CodeAsDocumentation.html)  
    - **Suggested Reading:**
        - [Refactoring *Martin Fowler, Kent Beck*](https://martinfowler.com/books/refactoring.html) *pdf* on machine
        - [Refactoring to Patterns *Joshua Kerievsky*](https://martinfowler.com/books/r2p.html) *pdf* on machine
            - [Online Readable | *archive.org*](https://archive.org/details/refactoringtopat0000keri) 
- [Airbnb style guide](https://github.com/airbnb/javascript)
- [Chaining methods to write sentences](https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/)
- [Clean code in JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

## [10 Principles for Keeping Your Programming Code Clean](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

### 1. Revise Your Logic Before Coding
Instead of jumping write into the code, write it down first.
- flow diagrams
- pseudocode
- etc,.

### 2. Clearly Expose the Structure of the Page
Use of `#main-container` is a good start but also using *representative IDs* is even better.

>[!example]
> ```html
> <div id="main-container">
>     <div id="header">
>         <div id="logo">...</div>
>         <div id="main-menu">...</div>
>     </div>
>     <div id="content">
>         <div id="left-column">...</div>
>  
>         <div id="center-column">...</div>
>         <div id="right-column">...</div>
>     </div>
>     <div id="footer">
>         <div id="footer-menu">...</div>
>         <div id="disclaimer">...</div>
>     </div>
> </div>  
> ```

This def. makes `html` more readable, and justifies use of `id` beyond styling

### Commments
- 3. Use the Correct Indentation
- 4. Write Explanatory Comments
- 5. Avoid Abusing Comments

### Functions
- 6. Avoid Extremely Large Functions
- 7. Use Naming Standards for Functions and Variables

### 8. Treat Changes w/ Caution
### 9. Avoid Indiscriminate Mixing of Coding Languages
### 10. Summarize Your Imports
>[!quote] *Even though it is much better to have additional coding languages imported from different files, this shouldn’t be abused. If there are too many style sheets, they can probably be summarized into one or two.*
