// Problem 1 : word frequency count of string 

function wordFrequency(sentence){
  let words = sentence.split(" ");
  let wordCount = {};
  for(let word of words){
    let wordLowerCase = word.toLowerCase();
    if(wordCount.hasOwnProperty(wordLowerCase)){
        wordCount[wordLowerCase]++;
    }
    else{
        wordCount[wordLowerCase]=1;
    }
  }
  return wordCount;
}
let output = wordFrequency("i love js and i love coding And Js is fun My name is Pollob");
console.log(output);


// Problem 2 : Student marks analysis  
function analysisMarks(marksObj){

    console.log(marksObj);
    let totalMarks = 0;
    let highestMarks = -Infinity;
    let lowestMarks =Infinity;
    let highestSubject = null ;
    let lowestSubject = null ;

    for(let subject in marksObj){
        if(highestMarks<marksObj[subject]){
            highestMarks=marksObj[subject];
            highestSubject = subject;
        }
        if(lowestMarks>marksObj[subject]){
            lowestMarks = marksObj[subject];
            lowestSubject = subject;
        }
        totalMarks+=marksObj[subject];
    }
    let aveMarks = totalMarks / Object.keys(marksObj).length;
    return {
        total : totalMarks,
        average: aveMarks,
        highestMarks,
        lowestMarks,
        highestSubject,
        lowestSubject,
    };
}
let result = analysisMarks({math:78,english:65,bangla:55 , physics:88 , biology: 99});
console.log(result);

// Problem 3 : Password Strengh Checker 
function strenghChecker(password){
    console.log(password);
    let passwordLength = password.length;
    let hasUpperCase = false;
    let hasNumber = false ; 
    let hasSpace = false ;
    let reasons = [];
    
    for(let i=0;i<passwordLength;i++){
        let ch = password[i];
        if(ch>='0' && ch<='9'){
            hasNumber=true;
        }
        if(ch>='A' && ch<='Z'){
            hasUpperCase = true ;
        }
        if(ch === " "){
            hasSpace = true;
        }
    }
    if(!hasUpperCase){
        reasons.push('Missing UpperCase !');
    }
    if(!hasNumber){
        reasons.push("Missing Number !");
    }
    if(hasSpace){
        reasons.push('Password should not contain space!')
    }
    return {
        valid : reasons.length === 0,
        reasons,
    };
}
let PasswordResult = strenghChecker('Helloworld18');
console.log(PasswordResult);


// Problem 4 : Calculate Bill 

function calculateBill(items, prices){
    console.log(items,prices)
    let itemCount = {};
    for(let item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }
        else{
            itemCount[item]=1;
        }
    }

    let total = 0;
    for(let item in itemCount){
        let price = prices[item];
        let quantity = itemCount[item];
        total+=price*quantity;
    }
    
    return{
        total,
        itemCount,
    }
}
let calculateBillResult = calculateBill(["pen","pen","book","pen"],{pen:10,book:50});
console.log(calculateBillResult);


// Problem 5 : Remove Duplicate Element from Array 
// function removeDuplicateElement(array){

// }
// let removeDuplicate = removeDuplicateElement(array);
// console.log(removeDuplicate);