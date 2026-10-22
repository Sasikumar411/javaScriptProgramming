
function step1(){
    return new Promise((resolve, reject)=>{
        resolve (10);
    });
}

function step2(num){
    return new Promise((resolve, reject)=>{
        resolve (num*2);
    })
}

function step3(num){
    return new Promise((resolve, reject)=>{
        resolve (num+10);
    })
}

step1()
.then((result)=>{
    return step2(result);
}).then((result2)=>{
    return step3(result2);
})
.then((finalRes)=>{
    console.log(finalRes);
})
//------------------------------------------

let promise2 = new Promise((resolve, reject)=>{
    resolve('Sasi');
})

promise2.then((result)=>{
    console.log(result);
});