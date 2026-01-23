// BMI calculate
let bmi = 20.1;
if (bmi < 18.5) {
  console.log("Weight is very low means Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal (Healthy weight)");
} else {
  console.log("Not Normal");
}

// Leap year Check

let year = 1900;
if (year % 100 != 0 && year % 4 == 0) {
  console.log("Leap Year");
} else if (year % 400) {
  console.log("Leap year");
} else {
  console.log("Not Leap year");
}
