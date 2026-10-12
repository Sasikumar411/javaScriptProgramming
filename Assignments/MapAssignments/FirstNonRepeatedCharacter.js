const str = 'Sasikumar'.toLowerCase();

let count = new Map();

for(let ch of str){
    if(count.has(ch)){
        count.set(ch, count.get(ch)+1);
    }else{
        count.set(ch, 1);
    }
}

for(let ch of str){
    if(count.get(ch)===1){
        console.log("First non repeated character is: ", ch);
        break;
    }
}