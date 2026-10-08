/*

1) gloabl scope
2) function scope
3) block scope

*/

let empName;
let salary =10000;
const BONUS =2000;
let x;

//function block
function calculateFinalSalary(){
    let finalSal = salary+BONUS;
    console.log(finalSal);
    x=finalSal;
}

//normal block
{
    let city = 'bangalore';
    let basicSal = x-2000;
}
//console.log(empName); //undefined
//console.log(salary);
//console.log(city);
console.log(finalSal);