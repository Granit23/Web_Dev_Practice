// let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

// destructuring
const name = 'john snow';
const obj = {
    [name]: 'hello',
    [1+2]: 'hihi'
}



const player = obj.player;
const experience = obj.experience;


// with destructuring you can do this: 
const { player, experience } = obj;  // same thing as const player = obj.player etc
let {wizardLevel} = obj;


const a = "Simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

//Template Strings 
const name = "Sally";
const age = 34;
const pet = "horse"; 

// const greeting = "Hello " + name + " you seem to be doing " + greeting // annoying

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}


// Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow functions
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;

// Advanced Functions

// Closures - the function ran, the function executed, it won't execute again but it 
// remembers the references to the variables. In this case, the second() function
// remembers the greet variable even outside the function.
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet); 
    }
    return second;
}

const newFunc = first();

// Currying    
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; 
curriedMultiply(3);  // returns (b) = > a * b;
curriedMultiply(3)(4); // return 12;
const multiplyBy5 = curriedMultiply(5); // now have afunction that muliplies by 5
multiplyBy5(10) // returns 50

// Compose
const compose = (f, g) => (a) => f(g(a)); 

const sum = (num) => num + 1;
const mult = (num) => num*2;
compose(sum, mult)(5);

// Avoiding side effects, functional purity
var a = 1;
function b() {
    a = 2;  // side effect
}


// Advanced Arrays
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

// map, filter, reduce
// map for copying array into new array and doing an operation on it

const mapArray = array.map(num => num * 2);

console.log(mapArray);

// filter, filters array based on criteria you provide (e.g. num > 5, num == 10, etc)
const array = [1, 2, 10, 16];

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce does an operation on the current num and the previous numbers in the array


const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray);