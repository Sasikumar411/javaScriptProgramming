const str = 'Sasikumar'.toLowerCase();

/*
let count = new Map();

for(let ch of str){
    if(count.has(ch)){
        count.set(ch, count.get(ch)+1);
    }else{
        count.set(ch, 1);
    }
}

for(let ch of str){
    if(count.get(ch)===2){
        console.log('First repeated character is: ',ch);
        break;
    }
}*/

let seen = new Set();

for(let ch of str){
    if(seen.has(ch)){
        console.log('First repeated character is: ',ch);
        break;
    }seen.add(ch);
}
