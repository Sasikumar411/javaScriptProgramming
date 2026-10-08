// Slice() vs Substirng()

let str = 'Playwright';

console.log('Length of the string: ', str.length);

// Normal index values
console.log('Sliced the string using slice method: ', str.slice(2, 4));
console.log('Sliced the string using substring: ', str.substring(5, 9));

// Negative indexes
console.log('Sliced the string using slice method: ', str.slice(-5, -1));
console.log('Sliced the string using substring: ', str.substring(-3));



/*
Slice()

- Slice is used to extract part of the string from the given string using the index value. 
- It supports the negavtive index and if the ending index higher than start index, it doesn't support
--------------------
Substring()

- Substring also used for extract part of the string from the given value using the index values.
- It doesn't suppports the negative index, if it's negative index it consider as 0
- If start > end index it will swap the values and extract the substring

*/