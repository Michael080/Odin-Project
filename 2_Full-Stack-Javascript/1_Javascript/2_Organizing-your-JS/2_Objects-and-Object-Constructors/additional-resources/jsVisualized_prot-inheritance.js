function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.bark = function() {
    return 'Woof';
  }
}

let max = new Dog('Max', 'Cocker Spaniel', 'blue');

console.log(max.bark());

const dog1 = new Dog(
  'Daisy',
  'Labrador',
  'black'
);

const dog2 = new Dog(
  'Jack',
  'Jack Russell Terrier',
  'white'
)

console.log(JSON.stringify(dog1, null, 2));
console.log(dog1.__proto__); // => Dog {}


// * Classes are only syntactival sugar for constructor functions. Everything works the same way as the above process

class Doggy {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  bark() {
    return 'Woof!';
  }
}


// In an extended class, we can access the paret class constructor using the super keyword. The arguments the parent class' constructor expects, we have to pass to super:name in this case.

class extenDog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return 'Woof!';
  }
}

class Chihuahua extends extenDog {
  constructor(name) {
    // * w/ the 'super' keyword, we can call the class that the sub-class extends
    super(name);
  }

  smallBark() {
    return 'Small woof!';
  }
}

const myPet = new Chihuahua('Evil Beast');


// Another way to add prototypes to an object is by passing an existing object to Object.create:

var person = {
  name: 'Lydia',
  age: 21
}

// set 'person' as the prototype of 'me'
let me = Object.create(person);

// OR using an object constructor

function persona(stuffs) {
  this.stuffs = stuffs;
}

let yous = Object.create(persona);
console.log(yous);