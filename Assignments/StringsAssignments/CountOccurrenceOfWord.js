// Count the occurrence of each word

let str = 'Java script and java api playwright automation and api testing automation'.toLowerCase();
let arr = str.split(' ');

let wordCount = {}

for(let word of arr) {
    if(!wordCount[word]) {
        wordCount[word] = 1;
    }else {
        wordCount[word]++;
    }
}
console.log(wordCount);