

// splice() -> mutate method - add, remove, it will replace also
// array.splice(start, deleteCount, item1, item3,.....)
// 1st parameter - start index
// 2nd parameter - deletecount

// delete using splice
let arr = [3,4,5,6,7];
console.log(arr);  //[ 3, 4, 5, 6, 7 ]
arr.splice(2,2); 
console.log(arr);  //[ 3, 4, 7 ]

// add using splice
arr.splice(2,0,6)
console.log(arr);  //[ 3, 4, 6, 7 ]

// replace using splice
arr.splice(1,1,10);
console.log(arr);   //[ 3, 10, 6, 7 ]

// iterate methods
// Map -> it will transform each element in an array

/*
Syntax -- arr.map((elemen, index, array)=>{

})

array.map(element => element + 2) // new transformed
*/

let arr1 = [1,2,3,4,5,6];

let newArr= arr1.map(num => num+2);
console.log(newArr);

// filter
// array.filter((element, index.arr) => {condition})  // new array

let arr2 = [1,2,3,4,5,6,7];

let evenArr = arr2.filter(num => num%2===0);
console.log(evenArr);

// reduce -> reduces your output to single value

let arr3 = [1,2,3,4];
// accumalator - where you want to store the value
// arr3.reduce((accumalator, element, index, array) => logic, initialValue);

let sum = arr3.reduce((result, num)=>result+num,0); // single value;
console.log(sum);

// search methods
// find -> it will check condition and return first element

let arr4 = [10,20,30,40];
console.log(arr4.find((num) =>  num>15));  //first matchibng value
console.log(arr4.findLast((num)=> num>15));  //last matching value

// indexOf
// lastIndexOf