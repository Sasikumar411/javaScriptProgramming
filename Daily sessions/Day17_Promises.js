/*
Promise is an object


Outcome of promise:
------------------
1) Pending => still your promise is running
2) Success => completed successfully
3) Failure => promised failed with error

*/

// Promise syntax
let promise = new Promise((resolve, reject)=>{

        console.log('This is the executor function!')

        let success = true;
        
        if(success){
            resolve('Operation succeded');
        }else{
            reject('Operation failed');
        }
});

/*
promise then => positive result
catch => negative result
finally => you are going to write cleanup code
*/

promise
 .then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Clean up completed');
})

