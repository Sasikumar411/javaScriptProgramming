function step1() {
    return new Promise((resolve, reject)=>{
        resolve('Sasi');
    })
}

function step2(string) {
    return new Promise((resolve, reject)=>{
        resolve(string + 'kumar');
    })
}

step1().then((result)=>{
    return step2(result);
}).then((result2)=>{
    console.log(result2);
})
