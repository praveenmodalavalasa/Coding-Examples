// 35Th Question
// Write a JavaScript function to get random items from an array.

const ele = [1,5,6,22,45,97,103];
const random_item = ele[(Math.floor(Math.random() * ele.length))];
console.log(random_item);