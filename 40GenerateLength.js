// 40Th Question
// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.


const arr1=[];
const res1=(start,length)=>{
    let s=start;
    for(let i=0; i<length; i++, s++){
    arr1.push(s);
    }
    return arr1;
}
console.log(res1(-6,4))