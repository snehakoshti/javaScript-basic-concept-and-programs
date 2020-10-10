//
//
// The + Operator
const str = 'Hello' + ' ' + 'World';
console.log (str) // 'Hello World!'
// If the left hand side of the + operator is a string, 
// JavaScript will coerce the right hand side to a string.
let str = 'Values: ';
str += 42;
str += ' ';

str += {};
str += ' ';

str += null;

console.log(str); // 'Values: 42 [object Object] null'

//
// 
// Array#join()
console.log(['Hello', ' ', 'World'].join('')); // 'Hello World')

// The first parameter to join() is called the separator. 
// By default, the separator is a single comma ','.
console.log(['a', 'b', 'c']).join(); // 'a,b,c')

const fileName = ['hostname', 'tutorials', 'string-concat'].join('/');
console.log(fileName); // 'hostname/fundamentals/string-concat'

//
// 
// String#concat()
// The concat() function takes one or more parameters, and returns the 
// modified string. 
const str1 = 'Hello';
const str2 = str1.concat(' ', 'World');

console.log(str1);
// 'Hello'. Strings are immutable, so `concat()` does not modify `str1`
console.log(str2);
// 'Hello World'

//
//
// Template Strings 
// Embed Javascript variables and expressions
const name = 'Rachel';
console.log(`Hi, I'm ${name} and 1 plus 1 is ${1+1}`);
// Hi, I'm Rachel and 1 plus 1 is 2

// Combine multi-line strings
const start = `
# # # 
 # # `;
const end = `
 # # 
# # #
`;
console.log(start + end);
/*
"
# # # 
 # # 
 # # 
# # #
"
*/
