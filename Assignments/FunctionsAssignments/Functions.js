
// 1) Normal function

function add(product1, product2) {

    console.log(product1 + product2);
}
add(100, 200);

// 2) Function expression

const add = function (product1, product2) {

    console.log(product1+product2);
}
add(15,30);

// 3) Immediately Invoked Function Expression

(function (product1, product2){
    console.log(product1 * product2)
})(10,20)

// 4) Arrow Function

let add = (product1, product2) => {
    
    console.log(product1 / product2);
}
add(10,2);

// 5) Callback Function

function multiply(product1, product2, callback) {
    callback(product1, product2)
}

function displayVal(a, b) {
    console.log(a*b);
}

function add(c, d) {
    console.log(c-d);
}

multiply(10, 20, displayVal);
multiply(10, 5, add);

