const str = 'JavaScript Playwright testing Ai';
const words = str.split(' ');

let count = new Map();

for(let word of words){
    count.set(word, (count.get(word)||0)+1);
}
console.log(count);