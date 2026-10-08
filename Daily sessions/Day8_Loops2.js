const { count } = require("node:console");

let arr = [0, 1,2,3,4,5];

// 1) for loop
//for(let i=0; i<arr.length; i++){
//    console.log(arr[i]);
//}


// 2) for of loop
let  count_even=0;
let  count_odd=0;

for(let num of arr){

    if(num%2===0){
        count_even++;
        console.log("Even number: "+ num);
    }
    else{
        count_odd++;
        console.log("Odd number:  "+ num);
    };
}
console.log(count_even);
console.log(count_odd
);

// ------------------------
let empname = 'Sasi';

for(let char of empname) {
    console.log(char);
};
// ------------------------

let name = 'Sasikumar'.toLowerCase();
let vowels='';
let constanants='';

for(let char of name){
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
        vowels+=char;
    else{
        constanants+=char
    }
}
console.log("Vowels are: "+vowels);
console.log("Consts are: "+constanants);


// 3) for in loop  --> Exclusively used for objects
let empdetail = {
    name : 'Sasi',         // name is a key, ravi is a value
    age : 27,
    role : 'QA engineer'
};

for(let emp in empdetail){
    console.log(emp+" : "+ empdetail[emp]);
}