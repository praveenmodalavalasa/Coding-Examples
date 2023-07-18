const difference = (input1, input2) => {
    input1 = input1.flat(Infinity)
    input2 = input2.flat(Infinity)
    const res1 = input1.filter(ele => input2.indexOf(ele) === -1);
    const res2 = input2.filter(ele => input1.indexOf(ele) === -1);
return res1.concat(res2);
}

const a = [1, 2, 3, 4, 5]
const b =  [1, [2], [3, [[4]]],[5,6]];

console.log(difference(a, b));
console.log(a.indexOf(9))