// 1) Normal function

function add(num1, num2) {
    return num1+num2;
}
console.log(add(2,3));

// 2) Function Expression

const addFunction = function add(product1, product2) {

    return product1 - product2;
}
let result = addFunction(4,2);
console.log(result);

// 3) IIFE (Immediately Invoked Function Expression)

(function (product1, product2){
    return product1/product2;
})
console.log((100/50));


// 4) Arrow Function

let multiply = (num1, num2) => {

    if(num1===num2)
        return num1 * num2;
    else{
        return "Values are not valid."
    }
}
let result1 = multiply(2,2);
console.log(result1);

// 5) Callback Function

function divide(product1, product2, callback) {
    return callback(product1, product2);
}

function displayVal(a, b) {
    return a/b;
}
let result2 = divide(10, 5, displayVal);
console.log(result2);
