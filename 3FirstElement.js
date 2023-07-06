// 3Rd Question
// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

const first = (input, n) => {
    if (!input.length || n <= 0) {
        return [];
    }
    else if (!n && input.length) {
        return input[0];
    }
    else {
        const result = [];
        if (n > input.length) n = input.length;
        for (let i = 0; i < n; i++) {
            result.push(input[i]);
        }
        return result;
    }
}
console.log(first([1,2,3,4,5],3));