// Few more features ontop of ES7
// Feature 1: String Padding useful for aligning strings
.padstart()
.padEnd()

'Turtle'.padStart(10); //'Turtle' with 10 spaces in front of it i.e:          Turtle
'Turtle'.padEnd(10);   //'Turtle' with 10 spaces after it. 

// Feature 2: Trailing Commas in param lists (useful for large param lists)
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,); 

// Feature 3: Object.valus and Object.entries

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

//Before, to loop through entries:
Objects.keys(obj).forEach((key,index) => {
    console.log(key, obj[key]);
});

//Now:
//Outputs values 
Object.values(obj).forEach(value => {
    console.log(value);
})

//Outputs key and value pairs
Object.entries(obj).forEach(value => {
    console.log(value);
})

// Loops through array and takes the username, and number from key, and combines them.
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

// Exercise ES8.js
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9);
let rabbit = '🐇'.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
var a ='';
Object.entries(obj).map(value => {
    a+=value[0] + " " + value[1] + " ";
})
console.log(a);