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

function getValue(value) {
  console.log(value.value);
}

getValue(obj1);
getValue(obj2);

let obj = { name: "John" };
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
greet.call(obj, "Hello", "!"); // Outputs: "Hello, John!"
greet.apply(obj, ["Hello", "!"]); // Outputs: "Hello, John!"
let boundGreet = greet.bind(obj);
boundGreet("Hello", "!"); // Outputs: "Hello, John!"

console.log(document.title);
console.log(y);
let y = 10;
