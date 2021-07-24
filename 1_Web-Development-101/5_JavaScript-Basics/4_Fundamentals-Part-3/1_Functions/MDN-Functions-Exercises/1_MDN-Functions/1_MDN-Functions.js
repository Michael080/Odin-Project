/* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions
* Functions 1
For the first task, you have to create a simple function — chooseName() —
* that prints a random name from the provided array (names) to the provided
* paragraph (para), and then run it once.
Try updating the live code below to recreate the finished example: */

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');
let section = document.querySelector('section');

// Add your code here
section.setAttribute('class', 'preview')

function chooseName(names) {
    // para.textContent = names[Math.floor(Math.random() * names.length)]
    return names[Math.floor(Math.random() * names.length)];
}

para.textContent = chooseName(names);
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);