console.log("1");

// Variables and Data Types
let age = 25;
const name = "John";
let isStudent = true;
let grades = [90, 85, 88];

let sum = age + 5;
let fullName = name + " Doe";
console.log(sum);
console.log(fullName);

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Event Handling
document.getElementById("myButton").addEventListener("click", function () {
  greet("Minh");
});

document.getElementById("submitButton").addEventListener("click", function () {
  let userName = document.getElementById("nameInput").value;
  alert("Hello, " + userName + "!");
});

//Hoisting
console.log(x);
var x = 5;

console.log(y);
let y = 10;
