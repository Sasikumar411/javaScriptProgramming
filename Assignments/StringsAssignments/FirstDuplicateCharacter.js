// First Duplicate Character

let str = 'Sasikumar'.toLowerCase();

let charCount = {};

for(let char of str) {
    if(charCount[char]){
        charCount[char]++;
    }
    else{
        charCount[char]=1;
    }
}

for(let char of str) {
    if(charCount[char]>1){
        console.log('First repeated character is: '+char);
        break;
    }
}