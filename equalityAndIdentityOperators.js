let threeNumber = 3
let threeString = '3'

/* Equaly operator does do type conversion before the comparison. */
if(threeNumber == threeString)
	console.log('3 and "3" are the same')

/* Identity operator doesn't do any type conversion. */
if(threeNumber === threeString)
	console.log('3 and "3 are not the same"')
