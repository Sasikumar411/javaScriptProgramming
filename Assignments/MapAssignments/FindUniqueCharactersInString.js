let str = 'Sasikumar'.toLowerCase();

let count = new Map();

for(let ch of str){
    if(count.has(ch)){
        count.set(ch, count.get(ch)+1);
    }else{
        count.set(ch,1);
    }
}

let unique=[];

for(let [ch, char] of count){
    if(char===1){
        unique.push(ch);
    }
}

console.log("Unique characters: ", unique.join(' '));