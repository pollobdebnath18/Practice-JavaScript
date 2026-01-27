// Task - 1   find a character is present or not 
let s = "Leading University";
console.log(s.includes('U'));

// Task - 2 count a character how many times present in string ----> e
let str = "LEADING university CSE department";
let cnt=0;
for(let i=0;i<str.length;i++){
    if(str[i].toLowerCase()=='e') cnt++;
}
console.log(cnt);

// Task - 3   Check All vowel is present or not 
let t = "aeioumr sonar bangla ami tumay valobashi uver tumi r ami";
let a=0,e=0,ii=0,o=0,u=0;
for(let i=0;i<t.length;i++){
    let ch = t[i].toLowerCase();
    if(ch =='a') a++;
    if(ch ==='e') e++;
    if(ch ==='i') ii++;
    if(ch ==='o') o++;
    if(ch ==='u') u++;
}
if(a>0 && e>0 && ii>0 && o>0 && u>0){
    console.log(" Yes . All vowel is present in string t.");
}
else{
    console.log("No. Missing vowel.");
}

// Task - 4 converted x to y and y to Y
let st = " xctond Xteinf dfd";
let convertedString = "";
for(let x of st){
    console.log(x);
    if(x==='x'){
        convertedString+='y';
    }
    else if(x==='X'){
        convertedString+='Y';
    }
    else{
        convertedString+=x;
    }
}
console.log(convertedString);

// Task - 5 converted each first character to capital
let str1 = "amr sonar bangla";
let converted2 ="";
let capitalize = true;
for(let p of str1){
    if(p === ' '){
        converted2+=p;
        capitalize=true;
    }
    else if(capitalize){
        converted2+=p.toUpperCase();
        capitalize=false;
    }
    else {
        converted2+=p;
    }
}
console.log(converted2);
