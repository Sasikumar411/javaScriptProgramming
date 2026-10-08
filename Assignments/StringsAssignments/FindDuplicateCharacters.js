// Find all duplicate characters

let str = 'Playwrriighpt'.toLowerCase();

let charCount = {};

for(let char of str) {
    if(!charCount[char]){
        charCount[char] = 1;
    }else{
        charCount[char]++;
    }
}

let duplicates = '';

for(let char in charCount) {
    if(charCount[char]>1){
        duplicates += char +'  ';
    }
}
console.log("Duplicates are: "+duplicates)