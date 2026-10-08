// 1) String -> sequence or group of a characters 

const { getCertificateCompressionAlgorithms } = require("tls");

// let stdName = "Sasi";
// let course = 'Playwright';
// let message = `I'm Sasi and learning playwright`           // backtick -> literal template

// let output =  `I'm ${stdName} and learning ${course}`;

// console.log(output);

// let empDetails = {
//     empName : "Sasikumar",
//     empId : 101,
//     role : "Software engineer",
//     isActive : true
// };

// console.log(typeof (empDetails));

// 2) Array   --> can be accessed by index
let arr = [1,2,3,4,5];
let arrOfNames = ['Sasi', 'Kumar', 'Mohan']
console.log(arr[0]);
console.log(typeof (arr));

// 3) Function
function sum(num1, num2){
    let output = num1+num2;
    console.log(output);
}
sum(20,30);

