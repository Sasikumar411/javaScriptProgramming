
let str='sasi';
console.log(typeof (str));

// we can declare a strings in 3 ways
let way1 = 'Sasi';
let way2 = 'kumar';
let way3 = ` hello this is ${way1} ` //template literal

// String are immutable
let str2 = 'mohan';
str2 = 'Sasi';
console.log(str3);
// -------------------------------------

let empname = 'Sasi';
empname[0]='K'   // won't work, because strings are immutable
console.log(empname);

// Escape characters    -   '       n        t

let str3 = "Hi hello \"Mohan\"";
//  \n      \t

// toUpperCase() - toLowerCase()
let str4 = 'Playwright';
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

// length()
console.log(str4.length);

// charAt();   --> Index starts with 0;
console.log(str4.charAt(3));

// indexOf()   --> Helps to find the index of the value
console.log(str4.indexOf('t'));

// includes    --> Return boolean (ture/false)
console.log(str4.includes('kum'));    // false
console.log(str4.includes(str4[11]));  // false
console.log(str4.includes('wri', 4))    //--> second parameter is where the searching needs to be start in the string and it's an optional

// startsWith()
console.log(str4.startsWith('Pla'));

let message = 'Warning : provide information.'

if(message.startsWith('Warning')) {
    console.log("It's a warning message.");
}
else{
    console.log("It's an error message.")
}

console.log("Ravi".startsWith('avi'));   //false

// endsWith() 
console.log(str4.endsWith('ight'));    //true

// subString() --> it will fetch part of the string
console.log(str4.substring(7));
console.log("Sasi".substring(2,3));

// replace   --> replaces it's first occurence
console.log(str4.replace('y', 'k'));

// replaceAll --> replaces all the values with is passed in the parameter
console.log('sasikumar'.replaceAll('s', 'i'));