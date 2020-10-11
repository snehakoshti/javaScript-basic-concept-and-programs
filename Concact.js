// The + Operator

const str = 'Hello' + ' ' + 'World';
str; // 'Hello World'

let str = 'Hello';
str += ' ';
str += 'World';
str; // 'Hello World'
// If the left hand side of the + operator is a string, JavaScript will coerce the right hand side to a string. 
// That means it is safe to concatenate objects, numbers, null, and undefined.

let str = 'Values: ';
str += 42;
str += ' ';

str += {};
str += ' ';

str += null;

str; // 'Values: 42 [object Object] null'



// Array#join()
// The Array#join() function creates a new string from concatenating all elements in an array. For example:

['Hello', ' ', 'World'].join(''); // 'Hello World'
// The first parameter to join() is called the separator. By default, the separator is a single comma ','.

['a', 'b', 'c'].join(); // 'a,b,c'

// 'Twas the night before Christmas'
['Twas', 'the', 'night', 'before', 'Christmas'].join(' ');
// Or you can use '/' to join together URL fragments:

// 'Hello/world/this/day'
['Hello', 'world', 'this', 'day'].join('/');
// Separators make Array#join() a very flexible way to concatenate strings.
//  If you want to join together a variable number of strings, you should generally use join() rather than a for loop with +.



// String#concat()
// JavaScript strings have a built-in concat() method.
//  The concat() function takes one or more parameters, and returns the modified string.
//   Strings in JavaScript are immutable, so concat() doesn't modify the string in place.

const str1 = 'Hello';
const str2 = str1.concat(' ', 'World');

// 'Hello'. Strings are immutable, so `concat()` does not modify `str1`
str1;
// 'Hello World'
str2;
// The downside of using concat() is that you must be certain str1 is a string.
//  You can pass non-string parameters to concat(), but you will get a TypeError if str == null.

// If `str` is null or not a string, can't use `concat()`
const str = 'Values: ';

// 'Values: 42 null'
str.concat(42, ' ', null);
// The concat() function is rarely used because it has more error cases than the + operator. 

// If you must use concat(), it is usually best to call it on an empty string:

''.concat('Hello', ' ', 'World');