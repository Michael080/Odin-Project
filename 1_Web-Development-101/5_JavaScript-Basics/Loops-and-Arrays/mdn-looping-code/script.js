// INFO: map() v filter() : map() takes a function which mutates a value, and filter() takes a function which returns a boolean and pushes items onto new array when `true` is returned.

// map() : used to mutate each value in a collection and return a new collection of those values

let cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
// map cats array to function which returns uppercase strings
const toUpper = string => string.toUpperCase();

// NOTE: just the function name is passed to map()
const upperCats = cats.map(toUpper);

// ---
//
// INFO: filter() : test each item and return new array containing items which "pass"

// return true if string starts w/ 'L'
const lCat = cat => cat.startsWith('L');

// NOTE: just as w/ map() pass only the function name
const filtered = cats.filter(lCat);

// the same is usually achieved using function expressions which removes the need for defining a bespoke function for the map/filter
const filtered2 = cats.filter((cat) => cat.startsWith('L'));

// -----------------------------------------------------------------------
//
// for...of : loop through collections
cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {
  console.log(cat);
}

// INFO: for...of v for loop : for...of is syntactic sugar which simplifies looping over collections, (collection length and indices can be ignored). "Traditional" for loops are still useful when the index of an item matters *see below example*

// append cat names to string: 'My cats are called', and add punctuation @ the end
const myCats = ['Pete', 'Biggles', 'Jasmine'];
let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < myCats.length; i++) {
  let cat = myCats[i];

  if (i < myCats.length - 1) {
    myFavoriteCats += `${cat}, `;
  } else {
    myFavoriteCats += `& ${cat}.`;
  }
}

console.log(myFavoriteCats); // => 'My cats are called Pete, Biggles, & Jasmine.'

// -----------------------------------------------------------------------
//
// INFO: continue statement : works similarly to `break` but instead of completely breaking out of the loop, it breaks out of the current iteration and *continues* on to the next

// form which takes number as input and displays all of the squares of integers (whole numbers) from 0 to given number

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener('click', () => {
  para.textContent = 'Output: ';
  const num = Number(input.value);
  input.value = "";
  input.focus();

  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
})

// -----------------------------------------------------------------------
//
// INFO: do...while v while : do...while one iteration is ALWAYS executed due to the conditional occuring after the code inside of the loop

let initializer = 1;
let thing;

do {
  thing = initializer * 2;
  console.log(thing);
  initializer++;
} while (initializer <= 10);
