
let str = 'Playwright';

// slice()
console.log(str.slice(0, 4));

//split() --> it will take a delimeter and split the  string into an array of strings
let str1 = 'I am moham';

let arr = str1.split(' ');
console.log(arr);

let str2 = 'Sasikumar';
console.log(str2.split('s'));

// repeat()
let str3 = '*';
console.log(str3.repeat(10));

// trim()  -> it will remove the whole spaces
// trimStart() -> it will remove the spaces at the beginning
// trimEnd() -> it will remove the spaces at the end
let str4 = '     Sasii    ';
console.log(str4.trim());

// padding()
// padStart() -> it will add padding to the start of the string
// padEnd() -> it will add padding to the end of the string

let str5 = '5';
console.log(str5.padStart(3,0));

// concat()
let str6 = 'Hello';
let str7 = 'Sasi';
console.log(str6+" "+str7);

console.log('Hello'.concat(' Sasi'));
//---------------------------------------------

let arrWords ='       Ramesh and raju, venkat, ram are good    '.trim().split(' ');
console.log(arrWords[arrWords.length-1]);

console.log(arrWords.includes('are'));

// Reverse a string
let str8 = "Sasikumar";
let rev = '';

// normal loop
for(let i=str8.length-1; i>=0; i--){
    rev += str8.charAt(i);
}
console.log(rev);

// for of loop
for(let ch of str8){
    rev = ch+rev;
}
console.log(rev);

// reverse using built in method
console.log('Playwright'.split('').reverse().join(''));

//-------------------------------------------------------------

// count occurrences of each character

let str9 = 'Sasikumar'.toLowerCase();

let charCount = {};

for(let char of str9) {
    if(charCount[char]){
        charCount[char]++;
    }else{
        charCount[char] = 1
    }
}
console.log(charCount);

// find unique characters

for(let char in charCount) {

    if(charCount[char]===1) {
        console.log(char);
    }
}
