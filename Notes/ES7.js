// Not as many changes as ES6.

//Change 1: includes() method
'Helloooo'.includes('o');   //returns true because 'o' is in helloooo

const pets = ['cat', 'dog', 'bat'];
pets.includes('cat'); // true

//Change 2: exponential operator
const square = (x) => x**2;   //returns 4 if x = 2
const cube = (y) => y**3      //returns 8 if x = 2

// ExerciseES7.js
// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
for (var i = 0; i < dragons.length; i++) {
    if (dragons[i].includes('John')) {
        console.log(dragons[i]);
    }
}

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const pow100 = (x) => x**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
