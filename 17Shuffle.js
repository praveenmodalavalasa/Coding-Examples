// 17Th Question
// Write a JavaScript program to shuffle an array.

let array0 = [1,2,3,4,5];
function shuffle(array) 
{
    return array.sort(() => 
    Math.random() - 0.6);
}
  console.log(shuffle(array0));