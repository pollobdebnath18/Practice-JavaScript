// Object access Task-1
const colors = {
  green: "#001122",
  blue: "#010",
  black: "#013",
  "golden rod": "pppppp",
};
console.log(colors["golden rod"]);

// Task - 2 ,,, add object property
const car = {
  make: "Toyota",
  model: "Corolla",
  price: 1000000000,
  color: "Black",
  year: 2026,
};
car["passenger capacity"] = 5;
console.log(car);

// Task -3 ,,, Display physics marks
const student = {
  name: " Alice ",
  id: 278,
  physics: {
    sub: "hsc physics",
    author: " Ami nije e",
    marks: 99,
  },
};
const physicsMarks = student.physics.marks;
console.log(physicsMarks);
console.log(student.physics["marks"]);

// Task - 4    Count the number of property
const person = {
  name: " Alice ",
  id: 278,
  physics: {
    sub: "hsc physics",
    author: " Ami nije e",
    marks: 99,
  },
  age: 23,
};
const propertyCount = Object.keys(person).length;
console.log(propertyCount);

// Task - 5  print key-value using loop
let myObject = {
  name: "alice",
  id: 222,
  age: 20,
  isStudent: true,
};
const values = Object.values(myObject);

for (let prop in myObject) {
  let value = myObject[prop];
  console.log(prop, value, typeof value);
}
