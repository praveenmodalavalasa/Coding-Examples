// 8Th Question
// Write a JavaScript program to find the most frequent item in an array.

const arr1=['3', 'a', 'a', 'a', '2', '3', 'a', '3', 'a' , '2' , '4', '9' , '3'];
const obj = {};

for (let i=0; i<arr1.length; i++) {
    if (obj[arr1[i]]){
        obj[arr1[i]] += 1;
    }
    else {
        obj[arr1[i]] = 1;
    }
}
console.log(obj);
const result3 = Object.entries(obj).sort((a,b) => b[1]-a[1])
console.log(result3[0][0] + " ( " + result3[0][1]+" " + "times )")