
/*
DataTypes
1) Premitive
2) Non primitive

Premitive Datatypes:
-------------------
1) number
2) Bigint
3) string
4) boolean
5) undefined
6) null
7) symbol

Non primitive Datatypes:
------------------------
1) string
2) Array
3) Function
*/

// 1) Number --> Integer and decimal values

let a = 20;
let sal = 23.45;

console.log(a);
console.log(typeof a);  //type of (a) -- this is also fine

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

let b = 9007199254740999;
console.log(b)

// 2) Bigint
let c = 9007199254740999n;
console.log(c)
console.log(typeof c);

let x=20;
let y=200n;

//let z=x+y;

//console.log(z);

// 3) boolean
let isFound = true;
let hasFlag = false;
let isMale = true;

console.log(typeof (isFound));

// 4) undefined
let empName; //undefined

console.log(empName);
console.log(typeof (empName));

// 5) null -> objects
let object1 = null;
console.log(object1);
console.log(typeof (object1));