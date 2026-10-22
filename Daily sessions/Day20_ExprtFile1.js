/*
export let add = (a,b) => (a+b);

export let sub = (a,b) => (a-b);

export let multi = (a,b) => (a*b);

export function concat(a,b) {
    return a+b;
}

// export {add, sub, multi}
// export {add as addition, sub as subtraction, multi as multiplication}
*/

// Default exports
/*
export default add = (a,b) => (a+b);

export let sub = (a,b) => (a-b);

export let multi = (a,b) => (a*b);

export function concat(a,b) {
    return a+b;
}
*/
//-------------------------------

export class Student {

    //variables
    name;
    id;

    //constructor
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    //methods
    displayDetails() {
        console.log("Student name: ",this.name);
        console.log("Student id: ",this.id);
    }
}