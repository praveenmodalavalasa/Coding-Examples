// 10Th Question
// Write a JavaScript program that prints the elements of the following array.

var a = [[2, 6, 4, 59], [94, 15, 22, 8], [3, 9, 21, 33]]
a.forEach((e,i)=>
{
    console.log("row"+i);
    a[i].forEach((r)=>{
        console.log(`"${r}"`);
    })
})