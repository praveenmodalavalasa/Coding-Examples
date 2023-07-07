// 19Th Question
// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

var array1 = [1,2,3,4];
var array2 = [5,6,7,8];
const sum=[];
{
for(var i = 0; i < array1.length; i++){
    sum.push(array1[i] + array2[i]);
 }
}
console.log(sum);