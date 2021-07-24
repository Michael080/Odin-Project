/* Functions 3
In this task, you return to the problem posed in Task 1, with the aim of
improving it. The three improvements we want you to make are:

Refactor the code that generates the random number into a separate function
called random(), which takes as parameters two generic bounds that the
random number should be between, and returns the result.
Update the chooseName() function so that it makes use of the random number
function, takes the array to choose from as a parameter (making it more
flexible), and returns the result.
Print the returned result into the paragraph (para)'s textContent.  */

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');
let section = document.querySelector('section');

// Add your code here
section.setAttribute('class', 'preview')

function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function chooseName(names) {
    return names[randomRange(0, 8)];
}

para.textContent = chooseName(names);
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);