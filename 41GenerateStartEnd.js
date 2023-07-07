// 41St Question
// Write a JavaScript function to generate an array between two integers of 1 step length.

const arr=[];
const res=(start,end)=>{
    for(let i=start; i<=end; i++){
        arr.push(i);
    }
    return arr;
}
console.log(res(-4,7))