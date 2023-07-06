// 1st Question
// Write a JavaScript function to check whether an `input` is an array or not.

const is_array = (num) => {
    if (typeof (num) === 'object')
    {
        if(num[0] || num.length === 0)
        {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

console.log(is_array("a"));