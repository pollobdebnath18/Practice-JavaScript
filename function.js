// Task 1 : take 4 parameter & multifly them
function mul(n1,n2,n3,n4){
    return n1*n2*n3*n4;
}
const result = mul(3,4,5,6);
console.log(result);

// Task 2 : Take a number , if odd then multifly by 2 , if even then divide by 2;

function MulOrDivide(n){
    if(n%2==0){
        return n/2;
    }
    else{
        return n*2;
    }
}
const result1 = MulOrDivide(12);
console.log(result1);
const result2 = MulOrDivide(15);
console.log(result2);

// Task 3 : average of numbers of array 
function make_avg(numbers){
    let sum=0;
    for(const num of numbers){
        sum+=num;
    }
    return sum/numbers.length;
}
const avg = make_avg([2,4,5,6,7]);
console.log(avg); 

// Task 4 : binary string & return number of zero 
function count_zero(s){
    let cnt = 0;
    for(const c of s){
        if(c=='0'){
            cnt++;
        }
    }
    return cnt;
}
console.log(count_zero('010110010100'));

// Task 5 : check even or odd & return even if this number even & vice-varsa
function chekEvenOrOdd(x){
    if(x%2==0){
        return 'Even';
    }
    return 'Odd';
}
console.log(chekEvenOrOdd(15));
console.log(chekEvenOrOdd(10));