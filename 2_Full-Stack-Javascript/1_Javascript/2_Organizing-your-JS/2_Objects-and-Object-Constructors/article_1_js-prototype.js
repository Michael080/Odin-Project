function PrintStuff(myDocuments) {
  this.documents = myDocuments;
  this.amProto = () => 'wonder if this is a proto';
}


// add method to prototype
PrintStuff.prototype.print = function() {
  console.log(this.documents);
}

const newObj = new PrintStuff ("I am a new object and I can print");

newObj.print();


// --- Constructors ---
// Object() is the constructor
const myObj = new Object();

// get the constructor of myObj
console.log('myObj.constructor\n', myObj.constructor); // => Object()

function Account () {
  return 'I am an account...bleep-bloop';
}

// Objects created w/ the new keyword and any constructor other than the Object() constructor, get their prototype from the constructor function:

// Account() is the constructor
const myAcct = new Account();
console.log(' ');
console.log('myAmyAcct.constructor:\n', myAcct.constructor); 
// => Account()

let arrConst = new Array();
console.log(' ');
console.log('arrConst.constructor', arrConst.constructor); // => Array


// --- Inheritance in JS ---

function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function() {
  console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.isOrganic = function() {
  this.isOrganic ? console.log('I is organic foo!') : false;
}

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set Fruit's prototype to Plant's constructor:
Fruit.prototype = new Plant();

const aBanana = new Fruit('banana', 'yellow');
console.log(' ');
console.log('aBanana.name', aBanana.name);
// method inherited from the Plant.prototype
console.log('aBanana.showNameAndColor()', aBanana.showNameAndColor());