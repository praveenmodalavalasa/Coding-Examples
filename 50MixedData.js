// 50Th Question
// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

const array1=[2, '11', 3, "a2", false, 5, 7, 1];
const sum=array=>array.reduce((acc,val,index)=>typeof val==="number"?acc+=val:acc,0);    
console.log(sum(array1));