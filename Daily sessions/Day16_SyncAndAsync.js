//javaScript - OOPS
/*
1) Inheritance
2) Abstraction
3) Encapsulation
4) polymorphism

Website (webApplication) =>
    HTML => Structure of your webpage
    CSS - Styling => look and feel things (colors, font, layouts and design)
    JavaScript => functionality and behaviour on the webpage

  JavaScript will follow synchronous by default:  
    Synchronous execution => it will execute line by line

    once the line executed and completed then only it will go to second line
    line 1 to line 10

    Asynchronous execution:

    -> Api calls
    -> reading files
    -> Data base
    -> Timers
    -> Downloading

*/

console.log('Switch on washing machine');
console.log('Once clothes got washed');
console.log('Switch off washing machine');
console.log('Get ready');
console.log('pack your bag');
console.log('send your kid to school');

console.log('Switch on washing machine');

setTimeout(() => {
  console.log('Clothes got washed');
},3000);


console.log('Get ready');
console.log('pack your bag');
console.log('send your kid to school');

// Async also is have probelm

// if your async operations depended on each other better go with sequential exectuion
// await login => background
// await home page 
// await add a product
// await checkout

// There are lot of techniques to make your dependent async calls into sequential

// callback
// promises
// async and await

setTimeout(() => {
  console.log('Connect to DB');
}, 1000);

setTimeout(() => {
  console.log('Fetch the records');
}, 10000);

setTimeout(() => {
  console.log('Edit the records');
}, 2000);

setTimeout(() => {
  console.log('Close connection');
}, 1000);

// Synchronous execution

// Asynchronous execution => work if steps are independent with each other

// Async execution => if steps are dependent with each other => you have to write logic to make it proper execution

// callback hell

// pyramid of doom --> and below method is not we are using regularly

setTimeout(() => {
  console.log('Connect to DB');
  setTimeout(() => {
    console.log('Fetch the records');
    setTimeout(() => {
      console.log('Edit the records');
      setTimeout(() => {
        console.log('Close connection');
      }, 10000);
    }, 1000);
  }, 2000);
}, 1000);