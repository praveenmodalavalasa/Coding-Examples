// 12Th Question
// Write a JavaScript program to compute the sum and product of an array of integers.

const  Number = [2, 3, 4, 5];
const sum_and_prod = (input) => {
    let sum = 0;
    let prod = 1;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        prod *= input[i];
    }
    return [sum, prod];
}
console.log(sum_and_prod(Number));