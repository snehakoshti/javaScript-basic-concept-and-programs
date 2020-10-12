x = 5; // Assign 5 to x

console.log(x);   // 5

var x; // Declare x

/*
            |
            |
            |
       below is execution flow     
*/

var x;
x=5;
console.log(x); //5

//--------------------------------------

y=6;
console.log(x);
let y;

/*
            |
            |
            |
       below is execution flow     
*/
y=6;
console.log(x);//VM222:1 Uncaught ReferenceError: Cannot access 'y' before initialization
let y;

//------------------

y=6;
console.log(x); //VM243:3 Uncaught SyntaxError: Missing initializer in const declaration
const y;

//------------
var p1=7;
console.log(p1+' '+p2); // 7 undefined
var p2=8;


//--------------------------------------

//Function Hoisting

console.log(functionBelow("Hello")); //Hello
function functionBelow(greet) {
   return `${greet} world`;
}
console.log(functionBelow("Hi")); //Hi

/*
                 |
                 |
        difference --hoisting for function expression
*/

console.log(functionBelow("Hello"));  //error
var functionBelow = function(greet) {
   return `${greet} world`;
}
console.log(functionBelow("Hi"));  //Hi world

