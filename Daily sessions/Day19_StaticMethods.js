class Employee{
    
    static company = 'xyz';  // static variable
    name;  //instance

    Employee(name){
        this.name = name;
    }
}

let emp1 = new Employee('Sasi');
let emp2 = new Employee('Kumar');


class mathOperation{

    static add(a,b){
        return a+b;
    }
    multiply(a,b){
        return a*b;
    }
}

let result = mathOperation.add(3,4);
console.log(result);

let operation = new mathOperation();
console.log(operation.multiply(3,4));