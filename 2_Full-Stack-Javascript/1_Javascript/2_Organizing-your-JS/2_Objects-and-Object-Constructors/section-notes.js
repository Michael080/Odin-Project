
"use strict";

// It is best to define functions on the prototype of an object when using constructors:

function Student(name, grade) {
  this.name = name,
  this.grade = grade,
  this.atProm = false
}

Student.prototype.sayName = function() {
  console.log(this.name);
}
Student.prototype.goToProm = function() {
  this.atProm = true;
}

// * sayName/goToProm() will NOT be duplicated when defined in this way

// Object.create():
// ------------------------------------------------------------------
// Object.create() MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

const person = {
  isHuman: false,
  printIntro: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

console.log(me);

me.name = 'Bob';
me.isHuman = true;

console.log(me);
console.log(me.hasOwnProperty('name'));

me.printIntro();
// ------------------------------------------------------------------

// cont'd
function Student() {

}

Student.prototype.sayName = function() {
  console.log(`Hello my name is ${this.name}`);
}

function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}

EighthGrader.prototype = Object.create(Student.prototype);
// * this works too
// EighthGrader.__proto__ = Object.create(Student.prototype);

const carl = new EighthGrader("carl");
carl.sayName();
console.log(carl.grade); // => 8
