// Find all unique characters

let str = 'Sasikumarr'.toLowerCase();
let charCount = {};

for(let char of str) {
    if(!charCount[char]) {
        charCount[char] = 1;
    }else{
        charCount[char]++;
    }
}

let unique='';

for(let char in charCount) {
    if(charCount[char]===1){
        unique = unique+char+' ';
    }
}
console.log('Unique characters are: '+unique);