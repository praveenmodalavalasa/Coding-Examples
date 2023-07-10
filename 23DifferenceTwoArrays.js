


var a = [1,2,3,4,5,6,7,8,9];
var b = [2,4,6,8];
var result = [];
const difference = (input1, input2) => {
    for (var i = 0; i < input1.length; i++) {
        if (input2.indexOf(input1[i]) === -1) {
            result.push(input1[i]);
        }
    }

    for (var j = 0; j < input2.length; j++) {
        if (input1.indexOf(input2[j]) === -1) {
            result.push(input1[j]);
        }
    }
    return result;
}
console.log(difference(a,b));