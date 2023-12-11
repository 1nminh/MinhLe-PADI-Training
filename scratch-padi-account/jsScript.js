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
var x = "2" + "2" - "2";
console.log(typeof x);
console.log(x);

const z = {
  firstName: "John",
  lastName: "Doe",
};
console.log(typeof z);

myFunction();
console.log(carName);
function myFunction() {
  carName = "Volvo";
}

const obj1 = { value: 42 };
const obj2 = { value: 84 };

function getValue() {
  console.log(this.value);
}

getValue.call(obj1);
getValue.call(obj2);

let obj = { name: "John" };
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
greet.call(obj, "Hello", "!"); // Outputs: "Hello, John!"
greet.apply(obj, ["Hello", "!"]); // Outputs: "Hello, John!"
let boundGreet = greet.bind(obj);
boundGreet("Hello", "!"); // Outputs: "Hello, John!"

console.log(document.title);

// console.log(y);
// let y = 10;

var fruits = ["apple", "banana", "orange"];
// fruits.shift();
fruits.unshift("kiwi");
fruits.splice(0, 1);
console.log(fruits);
console.log(fruits.join(" "));

let moreFruits = ["banana", "orange1"];
let allFruits = fruits.concat(moreFruits); // Concatenate two arrays
console.log(allFruits);

// let numbers = new Array(1, 2, 3, 4, 5);

// let emptyArray = [];

// console.log(fruits[0]); // Output: 'apple'
// console.log(numbers[2]); // Output: 3
