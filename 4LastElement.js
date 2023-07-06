// 4Th Question
//  Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

const last = (input, n) => {
    if (!n && input.length) {
       return input.at(-1);
   }
   else {
       const result = [];
       if (n > input.length) n = input.length;
       for (let i = input.length-n; i <= input.length-1; i++) {
           result.push(input[i]);
       }
       return result;
   }
}
console.log(last([1,2,3,4,5],3));