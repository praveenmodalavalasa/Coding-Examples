// 5Th Question
// Write a simple JavaScript program to join all elements of the following array into a string.

const array = ["Red", "Green", "White", "Black"];
const result1 = array.join(',');
let str = "";
for (let i = 0; i < array.length; i++) {
    str += array[i]+",";
}
console.log(str)
console.log(result1);