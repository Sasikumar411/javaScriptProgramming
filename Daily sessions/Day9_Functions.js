/*
funtions => block of code that performs some task
*/

let a=30;    //global scope
console.log(a);   //30

//function declaration
function print() {
    console.log(a);   //30
}

//calling fucntion
print();


// 1) function with parameter

function add(num1, num2) {
    console.log(num1+num2);
}
add(2,3)

// 2) function without returntype

function product(num1, num2) {
    let result = num1 * num2;
    return result;
}
let output = product(2,3);
console.log(output);

// 3) default parameter

function printString(str='Hello'){
    console.log('Print :'+str);
}
printString('Sasikumar');

