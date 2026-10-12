/*
let str = 'Sasikumar'.toLowerCase();

let unique = new Set();

for(let ch of str){
    unique.add(ch);
}
console.log(unique);
*/

let arr = [1, 2, 3, 2, 4, 1, 5, 3];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);