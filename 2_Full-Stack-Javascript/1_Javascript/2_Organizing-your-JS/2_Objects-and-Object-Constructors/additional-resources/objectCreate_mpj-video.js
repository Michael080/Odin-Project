const cat = {
    // init serves as the object-constructor
    init: function(sound) {
        this.sound = sound;
    },
    makeSound: function() {
       return this.sound;
    }
}

function objectCreate(obj) {
    const clone = {}

    for (let key in obj) {
        console.log(key);
        console.log(obj[key])
        clone[key] = obj[key]
    }
    // ! Mutating the [[Prototype]] makes poopy performance!!!
    clone.__proto__ = obj;
    return clone;
}

// OR --- MPJ's solution:
function objectCreation(proto) {
    const obj = {};
    // ! Mutating the [[Prototype]] makes poopy performance!!!
    Object.setPrototypeOf(obj, proto);

    return obj;
}

var mark = Object.create(cat);
mark.init('mewuuuUF')
console.log(mark.makeSound());

var waffles = Object.create(cat);
waffles.init('mrrrooooooow')
waffles.makeSound();

console.log('Is mark a cat?',
      cat.isPrototypeOf(mark)
)

mark = objectCreate(cat);
mark.init('ruff!')
console.log(mark.makeSound());

// * using MPJ's solution:
// mark = objectCreation(cat);
// mark.sound = 'wammo!';
// console.log(mark.makeSound());