const console = require("node:console");

// 1) push Add an item at the end
const fruits = ["Apple", "Banana"];
let adds= fruits.push('Papaya');
console.log(fruits);

// 2) pop Remove the last item
const rem = fruits.pop();
console.log(fruits);

// 3) unshift Add an item at the beginning
const vegggies = ['Cucumber', 'Tomato', 'Onion'];
vegggies.unshift('Carrot');
console.log(vegggies);

// 4) shift Remove the first item
const num = [10,20,30,40];
num.shift();
console.log(num);

// 5) map Double every number
const numArr = [1,2,3,4,5];

const newArr = numArr.map((ele, index, numArr)=>{
    console.log(ele);
    console.log(index);
    console.log(numArr);
    return ele*2;
})
console.log(newArr);

// 6) filter Find even numbers
const numArr1 = [10,13,24,12,6,3];

const newArr1 = numArr1.filter((ele)=>{
    return ele%2===0;
})
console.log(newArr1);

// 7) reduce Calculate the total
const price = [100,140,150,200];

const totalCost = price.reduce((total, num)=>{
    return total+num
},0);
console.log(totalCost);

// 8) find Find the first matching value
const numArr2 = [10,20,30,40,50];

let findVal = numArr2.find((ele) => {
    return ele>20;
})
console.log(findVal);

// findLast()
const numArr3 = [10,20,30,40,50];

let findLastVal = numArr3.findLast((ele) => {
    return ele>20;
})
console.log(findLastVal);

// 9) findIndex Find the position of a matching value
const numArr4 = [15,25,35,45,55];

let indexVal= numArr4.findIndex((num) => {
    return num===55;
})
console.log(indexVal);

// 10) Includes Check whether a value exists
const browsers = ['Chrome', 'Firefox', 'Edge'];

if(browsers.includes('Chrome')){
    console.log("Yes, it' existed");
}else{
    console.log("Not existed");
}

console.log(browsers.includes('Edge'));

// 11) indexOf Find the index of a value
const languages = ['Tamil', 'English', 'Maths', 'Science', 'Social'];
console.log(languages.indexOf('English'));
console.log(languages.indexOf('Maths'));

// 12) some Check whether at least one student passed
const marks = [15,25,35,45,55];

let pass = marks.some((num) => {
    return num>=35;
})
console.log(pass);

// 13) every Check whether all students passed
const marks1 = [75,85,35,45,55,65];

let grade= marks1.every((ele) => {
    return ele>=35;
})
console.log(grade);

// 14) forEach Print each item with its index
const names = ['Sasi', 'Priya', 'Kumar'];

let printNames = names.forEach((ele, index) => {
    console.log( `${index + 1}. ${ele}`);
})

// 15) slice Copy part of an array
const numArr5 = [10,20,30,40,50,60];

console.log(numArr5.slice(1,4));

// 16) splice Remove and replace items
// -> Remove
const fruits1 = ['Apple', 'Mango', 'Papaya', 'Guaua'];

const removed = fruits1.splice(1, 2, 'Berry');
console.log(removed);
console.log(fruits1);

// 17) sort Sort numbers in both directions
// Ascending using sort
const numArr6 = [30,60,10,50,20,40];

let ascending = numArr6.sort((a,b) => {
    return a-b
})
console.log("Ascending order: ",ascending);

// Descending using sort
let descending = numArr6.sort((a,b) => {
    return b-a
})
console.log("Descending order: ",descending);

// 18) reverse Reverse the order
const numArr7 = [1,2,3,4,5];

console.log(numArr7.reverse());

// 19) concat Combine two arrays
const numArr8 = [1,2,3,4,5];
const numArr9 = [6,7];

console.log(numArr8.concat(numArr9));

// 20) join Convert an array to a string
const arr = [1,2,3,4,5];

console.log(arr.join(" | "));

// 21) flat Flatten a nested array
const arr1 = [1, [2, 3], [4, [5, 6]]];

console.log(arr1.flat());
console.log(arr1.flat(2));

// 22 Combine filter map and reduce
// Select products costing more than 500, get their names, and calculate the total price of the selected products.
const products = [
  { name: "Keyboard", price: 800 },
  { name: "Mouse", price: 400 },
  { name: "Monitor", price: 12000 },
  { name: "USB Cable", price: 200 }
];

const selected = products.filter((p) => p.price>500);
const namesProd = selected.map((p) => p.name);
const total = selected.reduce((sum, p) => sum + p.price, 0);

console.log(selected);
console.log(namesProd);
console.log(total);