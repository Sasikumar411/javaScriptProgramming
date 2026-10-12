let num = [1,2,3,4,5,1,2,3];

let seen = new Set();
let duplicates = new Set();

for(let n of num){
    if(seen.has(n)){
        duplicates.add(n);
    }seen.add(n);
}
console.log(duplicates);