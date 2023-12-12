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

// window.location.hostname = "a";

console.log(window.location.pathname);

function nam1e() {
  let xxx = "s";
  if (Math.random() > 0.5) {
    console.log(xxx);
    let xx = 1;
  } else {
    console.log(xxx);
    let xx = 2;
  }
}

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// let fruitss = ["apple", "banana", "orange"];

// for (let index in fruitss) {
//   console.log(index); // Output: '0', '1', '2' (indices as strings)
//   console.log(fruitss[index]); // Output: 'apple', 'banana', 'orange'
// }

// let person = {
//   name: "John",
//   age: 30,
//   job: "developer",
// };

// for (let key in person) {
//   console.log(key, person[key]); // Output: 'name John', 'age 30', 'job developer'
// }

let mySet = new Set([1, 2, 3]);

for (let value of mySet) {
  console.log(value); // Output: 1, 2, 3
}

const rappers = {
  eminem: "1972",
  tupac: "1971",
};
for (let ii in rappers) {
  console.log(rappers[ii]); // Uncaught TypeError: rappers is not iterable
}

const array1 = [1, 30, 4, 21, 100000];

console.log(...array1);
console.log(Math.max(...array1));
// array1.sort();
// array1.reverse();
console.log("---");
array1.sort(function (a, b) {
  return a - b;
});
console.log(array1);

console.log(encodeURIComponent("aa aaa :) s ' / ["));

let elementsByClass = document.getElementsByTagName("div");
console.log(elementsByClass);
