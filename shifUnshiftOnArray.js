var arr=[2,3,4];
//enter 5 at first
arr.unshift(5);
console.log(arr);  // [5, 2, 3, 4]
//enter 6 at end
arr.unshift(6);
console.log(arr);  // [6, 5, 2, 3, 4]
//remove first element
arr.shift();
console.log(arr);  // [5, 2, 3, 4]