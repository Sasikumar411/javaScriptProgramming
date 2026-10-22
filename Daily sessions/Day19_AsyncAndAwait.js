// Async and await

async function step1() {
    return new Promise((resolve, reject) => {
        resolve(10);
    });
}

async function step2(num) {
    return new Promise((resolve, reject) => {
        resolve(num * 2);
    })
}

async function step3(num) {
    return new Promise((resolve, reject) => {
        resolve(num + 10);
    })
}

let result = await step1();
let result2 = await step2(result);
let result3 = await step3(result2);

// make our sync
// await while calling

async function func1(){
    return Promise.resolve('30');
}

async function func2(){
    console.log('Message 2');
}

async function main() {
    await func1();
    await func2();
}
main();