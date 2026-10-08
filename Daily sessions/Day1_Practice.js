// Creating variables using var, let and const

//1) let
let salary=100;
salary=salary+30;
console.log(salary);

let a;
a=20;
a=30;

//let a;  //redeclaration not allowed

//2) const - for constant or fixed values use const
//java is dynamic language

const applicationName= 'QAMaster';
//applicationName= 'ravi'; //changing is not allowed
console.log(applicationName);

//3) var
var employeeName= 'Ravi';
employeeName= 'Mohan';
employeeName= 'Ramesh';
var employeeName=123;
console.log(employeeName);

//scope

//Javascript features:
//1) hoisint
//2) access before declaration

//drawbacks in javascript
let empName = 'Ravi';
empName = 123;
console.log(empName);

