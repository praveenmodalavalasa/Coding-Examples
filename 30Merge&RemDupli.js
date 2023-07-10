


var array1 = [1,4,5,6,7,8,9];
var array2 = [1,3,4,5,12,15];
var FinalArray = [...new Set([...array1 ,...array2])]; 
console.log(FinalArray);