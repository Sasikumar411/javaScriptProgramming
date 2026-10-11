
// 1) Map key value pairs   <key, value>  <key2, value2>

// creating a Map

let student = new Map();
console.log(student);

// Adding key, values pairs to map => setMethod

student.set('Id', 203);
student.set('Name', 'Sasi');
student.set('Class', 'VI');
student.set('School', 'xyz');
console.log(student);

// Overriding
student.set('Id', 204);

// Retrive the values
console.log(student.get('Name'));

// Checking key is present are not
console.log(student.has('School'));

// Delete the entries

let student2 = new Map();
student2.set('Id', 203);
student2.set('Name', 'Sasi');
student2.set('Class', 'VI');
student2.set('School', 'xyz');

console.log(student2.size);

student2.delete('Name');
console.log(student2);

// Size
console.log(student2.size);

// student2.set(1, 'This number key value');
// student2.set('1', 'This number key value');

// for of loop

let marks = new Map([['math: ', 50], ['english: ', 35], ['tamil: ', 60]]);      // Array of entries
console.log(marks);

for(let [key, value] of marks) {
    console.log(key + value);
}

// Using for each
marks.forEach((key, value) => {
console.log(key);
console.log(value);
})

//----------------------
let student3 = new Map();
student3.set('Id', 203);
student3.set('Name', 'Sasi');
student3.set('Class', 'VI');
student3.set('School', 'xyz');
console.log(student3.size);

console.log(student3.keys());
console.log(student3.values());

for(let key of student3.keys()) {
    console.log(key + " it's value is :"+ student3.get(key));
}


for(let value of student3.values()) {
    console.log(value);
}