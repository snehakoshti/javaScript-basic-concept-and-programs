let threeNumber = 3
let threeString = '3'

/* Equaly operator does do type conversion before the comparison. */
console.log('3 == "3"')
if(threeNumber == threeString)
	console.log('3 and "3" are the same')

console.log('3 === "3"')
/* Identity operator doesn't do any type conversion. */
if(!(threeNumber === threeString))
	console.log('3 and "3" are not the same')
