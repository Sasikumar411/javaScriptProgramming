
// Set -> it won't allow duplicates

// Avoid duplicates while storing the values
// To check value is there or not

let numbers = new Set();

// Adding elements -> add
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

console.log(numbers);

// Size()
console.log("NUmber of elements: ",numbers.size);

// initializing 
let numbers2 = new Set([1,2,3,4,5,6]);
console.log(numbers2);

// has
// delete
// clear

let arr = [1,2,3,3,4,4,5,6,7,6];
let unique = new Set();

for(let num of arr) {
    unique.add(num);
}
console.log(unique);

let arr2 = [1,2,3,3,4,4,5,6,7,6];
let seen = new Set();
let duplicates = new Set();

for(let num of arr2) {
    if(seen.has(num)){
        duplicates.add(num);
    }else{
        seen.add(num);
    }
}
console.log(duplicates);