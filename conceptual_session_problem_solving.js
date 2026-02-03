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
let output = wordFrequency("i love js and i love coding And Js is fun");
console.log(output);