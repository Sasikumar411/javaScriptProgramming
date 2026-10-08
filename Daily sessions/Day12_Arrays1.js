
// Arrays
// Array is a variable which will store multiple values

let numArr = [10, 20, 30, 40, 50];

let cars = ['Honda', 'Hyndai', 'Volkswagen', 'audi'];

let personDetails = ['Sasi', 27, 41000, true];

//console.log(typeof numArr);

// Accessing array by using index
console.log(numArr[4]);

// length
console.log('Length of an Array is: ', numArr.length);

// First element
console.log('First element of an Array is: ',numArr[0]);

// Last element
console.log('Last element of an Array is: ', numArr[numArr.length-1]);
console.log('Last element of an Array is: ', numArr[numArr.length-2]);

// Modifying using index
numArr[2] = 40;
console.log(numArr);

// predefined
// mutates methods    -- it will modfiy original array directly
// iterate methods
// search methods
// boolean methods
// new array methods

let numArr2 = [15,25,35,45,55];

// push -> add one or more elements to the end
// it will return modified array length
 let len = numArr2.push(10,20,30);
 console.log(len);  // returns the length of an array 
 console.log(numArr2);  // [15, 25, 35, 45,55, 10, 20, 30]

 // pop -> remove the last element from an array and returns it
 numArr2.pop();  //30
 console.log(numArr2);

 // shift() -> remove and return the first element
 let shif= numArr2.shift();
 console.log(shif);  //15
 console.log(numArr2);

 // unshift() -> adds the element at the starting
 numArr2.unshift(1,2,3);
 console.log(numArr2);

 // includes() -> check value is exist in an array or not
 let numArr3 = [1,2,3,4,5,6];
 console.log(numArr3.includes(3));  //true

 // indexOf() -> find the index of the value 
 let numArr4 = ['orange', 'apple', 'guaua'];
 console.log(numArr4.indexOf('apple'));  //1

 // slice() -> part of an array
 let numArr5 = [1,2,3,4,5,6,6,7,8];
 console.log(numArr5.slice(2,5));
 console.log(numArr5);   // original array will not be modified

 // concat
let numArr6 = [10,20];

let finalArr = numArr5.concat(numArr6);
console.log(finalArr);

// reverse  -> helps the reverse the array
let numArr7 = [90,80,70];
console.log(numArr7.reverse());

// sort
let numArr8 = [12,-56,453,0,-94, -23];
numArr8.sort((a,b)=>a-b)
console.log(numArr8);

let stringArr = ['bmw', 'audi', 'honda', 'hyndai', 'mahindra'];
stringArr.sort();
console.log(stringArr);

// Iterate methods
// normal for loop
// for of loop
// for each

let numArr9 = [10,20,30,40,50,60,70];

// for loop
for(let i=0; i<numArr9.length; i++){
    console.log(numArr9[i]);
}

console.log('*'.repeat(15));

// for of loop
for(let num of numArr9) {
    console.log(num);
}

console.log('*'.repeat(15));

// for each loop
numArr9.forEach((num) => {
    console.log(num);
})

// Array
// map() -> all elements
// filter() -> filtering the data
// reduce() -> reduce it into single value
