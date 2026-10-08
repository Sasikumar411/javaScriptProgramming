/*
Conditional statement --> to make decision
based on the decision execute different block of coce
based on the true condition

1) if/ else if/ else
2) switch
3) Ternary operator
*/

// 1) if else

let age = 19;
if (age >= 18) {
    console.log("Eligible for voting!");
}
else {
    console.log("Not eligible!");
}

// if else if
let marks = 60;

if (marks >= 75) {
    console.log("Grade A+");
}
else if (marks = 60) {
    console.log("Grade b");
}
else if (marks >= 40) {
    console.log("Grade c");
}
else {
    console.log("Failed");
}

// 2) Switch
let day = 3;

switch (day) {

    case 1: console.log('Sunday');
        break;

    case 2: console.log('Monday');
        break;

    case 3: console.log('Tuesday');
        break;

    case 4: console.log('Wednesday');
        break;

    case 5: console.log('Thursday');
        break;

    case 6: console.log('Friday');
        break;

    case 7: console.log('Saturday');
        break;

    default: console.log('Invalid entry');

}