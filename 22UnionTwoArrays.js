// 22Nd Question
// Write a JavaScript program to compute the union of two arrays.

var a = [33,43,54,66,];
var b = [100,66,33];
var union = [...new Set([...a, ...b])];
console.log(union);