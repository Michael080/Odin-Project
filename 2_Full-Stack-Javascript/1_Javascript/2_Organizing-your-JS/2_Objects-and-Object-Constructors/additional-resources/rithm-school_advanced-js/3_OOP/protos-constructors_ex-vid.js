// - Refactoring -
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  return this.isRunning === true ? 'beep' : '';
}

const whip = new Vehicle('Hoda', 'Whipsnap', 3000);

whip.turnOn();
console.log(whip.honk()); // => 'beep'
whip.turnOff();
console.log(whip.honk()); // => '' - empty string
whip;
