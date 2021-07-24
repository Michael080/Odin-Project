// ---- Check for emptiness ---
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  let keys = new Array();

  for (let key in obj) {
    keys.push(key);
  }

  return !keys.length > 0;
}

let bob = {
  name: 'bob'
};

let blammo = { };

console.log(isEmpty(bob));
console.log(isEmpty(blammo));

// jsInfo solution:

function jsInfoIsEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}


// ---------------------------------------------------------------
// ---- Sum object properties ---

// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let sum = 0;

for (let key in salaries) {
  console.log(key);
  sum += salaries[key];
}

console.log(sum);


// ---------------------------------------------------------------
// ---- Multiply numeric property values by 2 ---
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  let result = 1;

for (let key in obj) {
  let val = obj[key]
  typeof(obj[key]) === 'number' ? obj[key] = val * 2 : 'next';
}
  
return menu;
}

console.log(multiplyNumeric(menu));