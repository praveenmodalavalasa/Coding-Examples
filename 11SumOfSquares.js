// 11Th Question
// Write a JavaScript program to find the sum of squares of a numerical vector.

const test1 = [0,1,2,3,4];
let result = 0;

const sum_of_squares = (input) => {
    for (let i = 0; i < input.length; i++) {
        result += input[i]*input[i];
    }
    return result;
}
console.log(sum_of_squares(test1))