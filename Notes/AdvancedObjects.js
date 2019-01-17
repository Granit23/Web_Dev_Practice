// instantiation
// Same thing as an object in C++
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// 'extends' option is object inheritance

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);    //user super to have access to variables declared in parents class
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}


const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Exercise6.js
//Evaluate these:
//#1
[2] === [2] // false
{} === {}   // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };   // a = 5;
const object2 = object1;    // a = 5;
const object3 = object2;    // a = 5;
const object4 = { a: 5};    // a = 5;
object1.a = 4;              // a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    moo () {
        console.log(`My name is ${this.name}, I am a ${this.type}, and I am ${this.color} colored`);
    }
}

const cow = new Mamal('Shelly', 'cow', 'brown');
