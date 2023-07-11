// 42Nd Question
// Write a JavaScript function to find unique elements in two arrays.

var array =[1, 2, 3]
    var array1 = [100, 2, 1, 10]
var unique = [...new Set([...array , ...array1])];
unique.sort((a, b) => a-b);
console.log(unique)