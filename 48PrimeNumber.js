// 48Th Question
// Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

var Prime= [1,11,2,3,5,7]
const Prime1=(array)=>{
    return array.reduce((acc,Ele)=>{
        if(Ele==1||Ele>2&&Ele%2==0){
            return  false; 
        }
        return acc;
    },true);
}
console.log(Prime1(Prime));