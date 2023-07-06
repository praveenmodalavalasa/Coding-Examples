// 9Th Question
// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

var swap = function(letters){
    for(var  i =0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            letters[i] = letters[i].toUpperCase();
        }else {
            letters[i] = letters[i].toLowerCase();
        }
    }
   return letters.join('');
}
var text = 'The Quick Brown Fox'.split('') ;
console.log(swap(text));