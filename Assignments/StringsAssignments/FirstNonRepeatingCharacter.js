// Find first non repeating character

let str = 'Sasikumar'.toLowerCase();

let charCount = {};

for(let char of str) {
    if(!charCount[char]){
        charCount[char] = 1;
    }else{
        charCount[char]++;
    }
}

for(let char of str) {
    if(charCount[char]===1) {
        console.log('First non repeating character is: '+char);
        break;
    }
}