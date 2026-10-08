// Function expression => function stored inside a variable

const test = require("node:test");

let addition = function addnums(a,b) {
    console.log(a+b);
}
addition(2,3);

// Anonymous function --> A function without a name
let additionFun = function (a,b) {
    console.log(a+b);
}
additionFun(6,7);

// Arrow function --> ()=> { }
let productofNumbers = (num1, num2) => {
    return num1 * num2;
}
console.log(productofNumbers(2,3));

// if there is only one statement => no need to write paranthesis
let productofNumbers2 = (num1, num2) => num1 * num2;
console.log(productofNumbers2(3,4));

// one more form if you have only one parameter you can skip paranthesis
let squareOfNumber = (num1) => num1 * num1;
console.log(squareOfNumber(5));


// -- function patterns --

// Immedietly invoked function => if you want to run immedietly

(function () {
    console.log('connect to DB');
})();


// Callback function => function passed an argument to another function

function mainFunction(message, callback) {
    console.log(message);
    callback(15,3);
}

function divisionofNumbers(num1, num2) {
    console.log(num1/num2);
}

mainFunction('do division', divisionofNumbers);