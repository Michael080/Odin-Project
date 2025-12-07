# [repetitive programming technique](https://www.youtube.com/watch?v=0BDi0d1j7u0)
## the cereal problem
How to instruct computer to eat an entire bowl of cereal

### iterative approach (*loops*)
```javascript
function EatCereal(amount)
{
    while(amount > 0)
    {
        Take 1 bite
    }
}
```

### alt approach (*recursive*)
#### approach
```javascript
function EatCereal(amount)
{
    if (simplest case)
    {
        solution for simplest case
    }

    else
    {
        Divide into simpler case
        EatCereal(simpler case)
    }
}
```

#### solution
```javascript
function EatCereal(amount)
{
    // simplest case
    if (amount == 1 bite)
    {
        solution for simplest case
    }

    else
    {
        // divide into simpler case
        EatCereal(amount - 1 bite)
        // simpler case
        EatCereal(1 bite)
    }
}
```

## string manipulation
create program `down-up` which takes a string which prints out progressively smaller, then progressively larger substrings of the input

### example
```javascript
down-up("string"); // =>
    // "string"
    // "strin"
    // "stri"
    // "str"
    // "st"
    // "s"
    // "st"
    // "str"
    // "stri"
    // "strin"
    // "string"

```

### understanding the problem
**progressively smaller**
First the function takes the input string, and prints the string in its entirety, upon each iteration the function prints the previous output string minus the final char in the string *e.g. "string" -> "strin"*. 

**progressively larger**
Once the substring output of the function has been reduced to a single char, print the subsequent substrings w/ one add'l character *e.g. "s" -> "st" -> "str"*

#### plan
**ui**
- js console, the program will have no gui
- user input will be received via `prompt` where a string is requested from user

**output**
- progressively smaller/larger substrings of original input w/in the console
    - or maybe displayed in an `ul` element

**input => output | steps**
1. determine if substring is going "down" or "up"
    a. use bool to store down/up status
2. print new substring/s 
3. complete upon cycling once from "down" to "up" 

#### pseudocode
```javascript
// print new substring/s 
// complete upon cycling once from "down" to "up" 
function downUp(string)
{
    length = string.length
    // determine if substring is going "down" or "up"
    WHILE length > 1
        substring = string
        print substring - 1 char
        length -= 1
    ENDWHILE
    

    WHILE length < length
        substring = string.substring(length)
        print substring + 1
        length += 1
    ENDWHILE
}
```


