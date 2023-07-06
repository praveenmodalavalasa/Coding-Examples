// 14Th Question
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const duplicate = [8, 2, 2, 4, 5, 4, 7, 8, 7, 3, 7];
let remove = (input) => 
[...new Set(input)];
console.log(remove(duplicate));