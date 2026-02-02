// Task 1 : find lowest number
const numbers = [23,12,87,93,11];
let result = Math.min(23,12,87,11);
console.log(result);

// Task 2 : find smallest name of this array
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let mn = heights2[0];
for(const s of heights2){
    let len = s.length;
    if(len<mn.length){
        mn=s;
    }
}
console.log(mn);

// Task  3 : calculate total budget
const electronics = [
    {name:'mobile',price:20000,quantity:2},
    {name:'tablet',price:30000,quantity:3},
    {name:'laptop',price:40000,quantity:1}
]
function calculateElectronicsPrice(quantity){
    let sum=0;
    for(const pr of quantity){
        sum+=pr.price*pr.quantity;
    }
    return sum;
}
const result1 = calculateElectronicsPrice(electronics);
console.log(result1);

// Task 4 : find average phn price for the given array of object
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(phones){
            let sumPhnPrice=0;
            for(const phn of phones){
                sumPhnPrice+=phn.price;
            }
            return sumPhnPrice/phones.length;
    }
    const avePhonePrice = findAveragePhonePrice(phones);
    console.log(avePhonePrice.toFixed(2));

    //Task 5 : multiplying experience with increment and then add starting salery
     const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        function calculateSalery(employees){
            let sum=0;
            for(const employee of employees){
                sum+=employee.starting+(employee.experience*employee.increment);
            }
            return sum;
        }
        console.log(calculateSalery(employees));