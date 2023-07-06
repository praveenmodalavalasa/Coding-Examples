// 2Nd Question
// Write a JavaScript function to clone an array.

const test = [1, 2, 3, 4, 5, [1, 2, 3, 4]];
const array_clone = (input) => 
input.slice(0, input.length);
console.log(array_clone(test));