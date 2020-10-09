// Difference 1: Scope

// let: is Block scoped
if(true) {
    for(let i=1; i<=3; i++) {
        console.log(i); //Block scoped
    }
    console.log(i); //ReferenceError: i is not defined
}

// var: is  scoped to "current execution context" AKA a variable's enclosing function or the global scope
var varPet = "dog";
console.log(varPet); // dog // (global scope)

if(true) {
    var varFruit = "apple";
    console.log(varFruit); // apple // (enclosing function scope)
}
console.log(varFruit); //ReferenceError: varFruit is not defined



// Difference 2: Re-declaration

// let: cannot be re-declared (in same scope)
if(true) {
    let x = 10;
    let x = "hello"; //SyntaxError: identifier 'x' has already been decalared
}

function hey() {
    for(let x=1; x<=3; x++) {
        console.log(x); // 1 2 3
    }
    let x = "hello"; // let can be re-declared in different scope
    console.log(x); // hello
}

// var: can be redeclared at any point
var x = 10;
var x = "hello";
console.log(x); // hello
var x = 88;
console.log(x); // 88



// Difference 3: Creation of property on global window object

// let: does not create a property on global window object when a let variable is created in global scope
let dog = "rusty";
console.log(window.dog); //undefined

// var: creates a property on global window object when a var variable is created in global scope
let fruit = "Orange";
console.log(window.fruit); //Orange



// Difference 4: Javascript Hoisting
// Source: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

// let: variable declaration is hoisted, but not set to 'undefined'
console.log(color); //ReferenceError: color is not defined
let color = "red"; 

// var: variable declaration is hoisted, and set to 'undefined'
console.log(tree); //undefined
let tree = "oak";