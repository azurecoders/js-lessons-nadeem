let marks = 85;
let weather = "Rainy";

// if (weather === "Sunny") {
//   console.log("Apply sunblock");
// } else {
//   console.log("Stay at home as it could might rain");
// }

// Ternary Operator

// condition ? if true : if false
// weather === "Sunny"
//   ? console.log("Apply sunblock")
//   : weather === "Rainy"
//     ? console.log("Take your umbrella")
//     : console.log("Windy Weather");

// if (marks > 70) {
//   console.log("Yes you did a great job");
// } else if (marks > 80) {
//   console.log("Well Done");
// } else if (marks > 90) {
//   console.log("Amazing job");
// } else {
//   console.log("Yes you did try but no issues");
// }

// switch (marks) {
//   case 80:
//     console.log("Your marks are good");
//     break;
//   case 90:
//     console.log("Your marks are extremely good");
//     break;
//   default:
//     console.log("Good");
//     break;
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// For Loop

// let num = 5;
// num++;
// num++;
// num++;

// console.log(num);

// for (let i = 1; i <= 100; i++) {
//   // Loop breaks when the condition gets false
//   if (i == 80) {
//     break;
//   }

//   if (i == 5) {
//     continue;
//   }

//   console.log(i);
// }

// While Loop

// let j = 0;

// while (j <= 100) {
//   console.log(j);
//   j++;
// }

// DO while Loop

// let k = 0;

// do {
//   console.log(k);
//   k++;
// } while (k <= 100);

// let fruits = ["Banana", "Apple", "Mango"];
// console.log(fruits.length);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i].toUpperCase());
// }

// Array

// let name = "Muzammil";

// let names = ["Muzammil", "Nadeem", "Ahmed"];
// console.log(names);

// console.log(typeof names);

// console.log(names[2]);

// console.log(names.pop()); // Removes the last element of the array

// console.log(names.push(false)); // Add value to the last element of the array

// console.log(names.shift()); // Removes first element from the array

// console.log(names.unshift("Ibrahim")); // Add values in the start

// console.log(names.includes("Muzammil"));

// console.log(names.length - 1);

// console.log(names);

// let studentInfo = {
//   name: "Muzammil",
//   age: 18,
// };

// console.log(studentInfo["name"]);
// console.log(studentInfo.name);

let students = [
  {
    name: "Muzammil",
    age: 18,
  },
  {
    name: "Ahmed",
    age: 22,
  },
  {
    name: "Nadeem",
    age: 22,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].age);
}
