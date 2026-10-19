
function connectToDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Connect to DB');
            resolve();
        }, 3000);
    })
}

function fetchTheRecords() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetch the records');
            resolve();
        }, 2000);
    })
}

function editTheRecords() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Edit the records');
            resolve();
        }, 2000);
    })
}

function closeConnection() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Close connection');
            resolve();
        }, 2000);
    })
}

connectToDB()
.then(fetchTheRecords)
.then(editTheRecords)
.then(closeConnection)


// async with await
/*
async function main() {
    try{
await connectToDB()
await fetchTheRecords()
await editTheRecords()
await closeConnection()
}
catch{

}   
}
main()
*/