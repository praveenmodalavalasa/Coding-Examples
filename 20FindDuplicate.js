// 20Th Question
// Write a JavaScript program to find duplicate values in a JavaScript array.

const array5 = [1, 2, 1, 3, 4, 3, 5, 1];
var duplicates = array => 
array.filter((item,index) => 
array.indexOf(item) !== index);
console.log(duplicates(array5));