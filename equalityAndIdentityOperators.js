const threeNumber = 3
const threeString = '3'
const threeNumberObj = {
	value: 3
}
const threeStringObj = {
	value: '3'
}

/* Equaly operator does do type conversion before the comparison.
 * Identity operator doesn't do any type conversion. */

/* Comparing two primitives. */
console.log('3 == "3"')
if(threeNumber == threeString)
	console.log('> 3 and "3" are the same')

console.log('3 === "3"')
if(!(threeNumber === threeString))
	console.log('> 3 and "3" are not the same')

/* Comparing two obejcts. */
console.log('{ value: 3 } == { value: "3" }')
if(!(threeNumberObj == threeStringObj))
	console.log('> { value: 3 } and { value: "3" } are not the same')

console.log('{ value: 3 } === { value: "3" }')
if(!(threeNumberObj === threeStringObj))
	console.log('> { value: 3 } and { value: "3" } are not the same')

/* Comparing one primitive with one object */
console.log('{ value: 3 } == 3')
if(!(threeNumberObj == threeNumber))
	console.log('> { value: 3 } and 3 are not the same')

console.log('{ value: 3 } === 3')
if(!(threeNumberObj === threeNumber))
	console.log('> { value: 3 } and 3 are not the same')
