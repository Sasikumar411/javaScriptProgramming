/*
class
-------
A blue print for your objects
Won't exist in real time
template for creating objects

it contains => variables (features), methods (behaviour)

Object
-------
It's an instance of class
Which is creating by using class
Exist in real time
*/

class Student{
    //variables
    name;
    address;

    //pre defined constructor
    constructor(name, address){
        this.name=name;
        this.address=address;
    }

    //Default constructor
    //Student(name, address){
      //  this.name = name;
        //this.address = address;
    //}
    
    //mthod
    goesToSchool(schoolName){
        console.log("Goes to school "+schoolName);
    }
}

// creating an object    // Syntax:  new className()
// 2 Types of constructors
// default and user defined consturtors

let student1 = new Student('Sasi','Chennai')
student1.goesToSchool('Govt school');
console.log(student1.name);
console.log(student1.address);

let student2 = new Student('Kumar', 'Bangalore');
console.log(student2.name);
console.log(student2.address);

//javaScript - OOPS
/*
1) Inheritance
2) Abstraction
3) 

*/