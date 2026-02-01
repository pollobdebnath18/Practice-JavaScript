// Task 1 : Reverse the arry without reverse function
const colors = ['red','blue','green','yellow','orange'];
const rev=[];
for(let i=colors.length-1;i>=0;i--){
    const x = colors[i];
    rev.push(x);
}
console.log(rev);

// Task 3 : all element into a single string;
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let s="";
for(let num of numbers){
    s+=num;
}
console.log(s);

// Task 4: Reverse the words of a sentence. Only the position of the word will be reversed
const statement = 'I am a hard working person'
let res="",tmp='';
for(let i=statement.length-1;i>=0;i--){
   tmp+=statement[i];
   if(statement[i]==' '){
    for(let j=tmp.length-1;j>=0;j--){
        res+=tmp[j];
    }
    res+=' ';
    tmp='';
   } 
}
res+=tmp;
console.log(res);