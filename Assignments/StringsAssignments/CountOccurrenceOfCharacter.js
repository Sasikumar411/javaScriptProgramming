// Count the occurrence of each character

let str = 'pppplllaaywriwght';
let charCount = {};

for(let char of str) {
    if(!charCount[char]) {
        charCount[char]=1;
    }
    else{
        charCount[char]++;
    }
}
console.log(charCount);

