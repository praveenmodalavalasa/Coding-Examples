// 49Th Question
// Write a JavaScript program that takes an array of numbers and returns the third smallest number.

const fun=(array)=>array.sort((a,b)=>a<b?-1:1).at(2);
console.log(fun([2,3,5,7,1]));