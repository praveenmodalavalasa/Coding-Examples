// 6Th Question
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const test = "025468";
var result = "";
const insert_dashes = (input) => {
    result += input[0];
    for(let i = 1; i < input.length; i++) {
        if (input[i-1]%2 === 0 && input[i]%2 === 0)
        {
            result += "-";
        }
        result += input[i];
    }
    return result;
}
console.log(insert_dashes(test));

const insert_dashes_1 = (input) => 
input.map((num, i, arr) => 
(num%2===0 && arr.at(-1) !== num && arr[i+1]%2 === 0) ? num + "-" : num).join("");

console.log(insert_dashes_1(test.split('')));
