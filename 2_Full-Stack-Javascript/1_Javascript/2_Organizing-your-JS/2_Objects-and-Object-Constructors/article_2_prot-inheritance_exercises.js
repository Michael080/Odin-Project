console.log('----------working with prototype-----------');

var animal = {
  jumps: null
};
var rabbit = {
  __proto__: animal,
  jumps: true
}

console.log('1 --- rabbit.jumps:', rabbit.jumps); // => true
delete rabbit.jumps;
console.log('2 --- rabbit.jumps:', rabbit.jumps); // => null
delete animal.jumps;
console.log('3 --- rabbit.jumps:', rabbit.jumps); // => undefined


console.log('----------searching algorithm-----------');
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

console.log(Object.getPrototypeOf(table));

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


console.log('----------why are both hamsters full?__solution-1-----------');

var hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

var speedy = {
  __proto__: hamster,
  stomach: [] // => stomach written into each child-object
};

var lazy = {
  __proto__: hamster,
  stomach: [] // => stomach written into each child-object
}

speedy.eat('apple');
console.log('speedy.stomach', speedy.stomach); // => ['apple']
console.log('lazy.stomach', lazy.stomach); // => []


