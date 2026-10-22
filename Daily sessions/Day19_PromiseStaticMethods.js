const { error } = require("node:console");

// Promise.resolve(value)
let resolvedPromise = Promise.resolve('Validation successful');

resolvedPromise.then(result => {console.log(result)});

// Promise.reject(value)
let rejectPromise = Promise.reject('Error');

rejectPromise.catch(result => {console.log(result)});

// Handling multiple independent promises

// Promise.all([promise1, promise2, promise3, ....])

// get all 3 promises results
// if one of them got failed it will treat all are failed

let promise1 = Promise.resolve('Fetch data');
let promise2 = Promise.resolve('Check orders');
let promise3 = Promise.resolve('User profile');

Promise.all([promise1, promise2, promise3])
.then(result => {console.log(result)})
.catch(error => {console.log(error)})

let promise4 = Promise.resolve('Fetch data');
let promise5 = Promise.resolve('Check orders');
let promise6 = Promise.reject('User profile');

Promise.all([promise4, promise5, promise6])
.then(result => {console.log(result)})
.catch(error => {console.log(error)})


// Promise.allSettled()
let promise7 = Promise.resolve('Fetch data');
let promise8 = Promise.resolve('Check orders');
let promise9 = Promise.reject('User profile');

Promise.allSettled([promise7, promise8, promise9])
.then(result => {console.log(result)})
.catch(error => {console.log(error)})


// Promise.race([p1, p2, p3, ....])
let raceP1 = new Promise((resolve)=> {

    setTimeout(() => { resolve('Sasi')}, 2000)
})

let raceP2 = new Promise((resolve)=> {

    setTimeout(() => { resolve('Kumar')}, 2000)
})

let raceP3 = new Promise((resolve)=> {

    setTimeout(() => { resolve('Priya')}, 2000)
})

Promise.race([raceP1, raceP2, raceP3])
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)});


// Assignment
// Promise.any()