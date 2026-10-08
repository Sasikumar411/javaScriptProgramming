/*

1) Arithmetic operators
2) Assignment operators
3) Comparison operators
4) Logical operators
5) String operators
6) Ternary operators
7) Increment / decrement operators

*/

// 1) Arithmetic operators  --> +, -, *, /, %, **
let a=2;
let b=1;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// 2) Assignment operators  --> assign the or update the values
// =, +=, -=, *=, /=, %=

let m;

m = 10;
m +=5;
console.log(m);

// 3) Comparsion operators
let sal1=123;
let sal2='123';

console.log(sal1 == sal2); //true   -- compare content only
console.log(sal1 === sal2); //false -- compare content and datatypes
console.log(2>5); //false
console.log(2<5); //true
console.log('123' !== 123); //true
console.log(null == undefined);

// 4) Logical operators --> &&, ||, !
console.log(5>2 && 6>1);  //true
console.log(10>2 || 2>1); //true
console.log(!5>2); //false

// 5) String operator '+'
console.log('Sasi'+2); //Sasi2
console.log('10'-2); //8
console.log('Sasi'-2); //Nan

// 6) Increment / decrement operators
// pre/post - increments and decrements

let num1=5;
console.log(++num1);  //pre increment

let num2=6;
num2++;               //post increment
console.log(num2);
