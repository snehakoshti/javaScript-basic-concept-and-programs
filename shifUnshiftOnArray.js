var arr=[2,3,4];
//enter 5 at first
arr.unshift(5);
console.log(arr);  // [5, 2, 3, 4]
//enter 6 at first
arr.unshift(6);
console.log(arr);  // [6, 5, 2, 3, 4]
//remove first element
arr.shift();
console.log(arr);  // [5, 2, 3, 4]

var multiDimensionalArray = [
    [1,2,3],
    [4,5,6]
]
console.log(multiDimensionalArray);  // [ [1,2,3], [4,5,6] ]

//enter array [0,0,0] at first
multiDimensionalArray.unshift([0,0,0])
console.log(multiDimensionalArray);  // [ [0,0,0], [1,2,3], [4,5,6] ]

//remove first array [0,0,0]
multiDimensionalArray.shift()
console.log(multiDimensionalArray);  // [ [1,2,3], [4,5,6] ]
