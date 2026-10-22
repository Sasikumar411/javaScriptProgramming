import {add, sub, multi, Student} from './Day20_ExprtFile1.js';  // named import

console.log(add(2,3));
console.log(sub(2,3));
console.log(multi(2,3));

// import {addition as addTwoNum} from './Day20_ExprtFile1.js';

import {Student} from './Day20_ExprtFile1.js';  // named import
let std = new Student('Sasi', 101);
std.displayDetails()