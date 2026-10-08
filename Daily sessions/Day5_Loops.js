/*
loops => repeat code until some condition is true

1) for loop
2) while loop
3) do while loop

JS loops:
--------
1) for of
2) for in
*/

// 1) For loop
//-----------------
// 1) print 10 numbers

for(let i=0; i<=10; i++){
    console.log(i);
};

// 2) print even numbers from 1-10

for(let i=0; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

for(let i=0; i<=10; i++){
    if(i===6)
        continue;
    console.log(i);
}

// ) sum of first 10 number
let num=10;
let sum=0;

for(let i=0; i<=num; i++){
    sum+=i;
}
console.log(sum);

// 2) while loop
//-------------------

let i=0;

while(i<=10){
    
    console.log(i);
    
    i++
};

// 3) do while loop
//------------------

let n=25;

do{

    console.log(n)

}while(n<20);