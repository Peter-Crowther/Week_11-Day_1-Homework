// function sayHello() {
//   // console.log("Hello everyone!");
//   return "Hello everyone!";
// }
//
// var greeting = sayHello();


// function mood(name, mood) {
//   return `Hello ${ name }. You are ${ mood }`
// }
//
// var message = mood( "Tony", "annoyed" );
// console.log(message);

// function add(num1, num2) {
//   return num1 + num2
// }
//
// var result = add(1, 2, 3);
// console.log(result);//returns 3 as it adds the first two then ignores


// function add() {
//   var total = 0;
//   for (var number of arguments) {
//     total += number;
//   }
//   return total;
// }
//
// var wow = function(functionToInvoke) {
//   return functionToInvoke(1, 2, 3, 4, 5)
// }
//
// var result = wow(add)
// console.log(result);
//
// wow(function() {
//   for(var arg of arguments) {
//     console.log(arg);
//   }
// });

// var result = add(1, 2, 3, 4, 5);
// console.log(result);

// var sayHello = function() {
//   console.log("Hello");
// }

function hello(firstName, secondName) {
  return `Howdy, I am ${ firstName } ${secondName}`;
};

var message = hello("Peter", "Crowther");
console.log(message);

function multiply(num1, num2) {
  return num1 * num2
}

var result = multiply(2, 6)
console.log(result);



function first(array) {
  return array[0];
};

var my_array = ["house", "boat", "car"]
var result = first(my_array)
console.log(result);

function allNames(array) {
  return array;
};

var names = ["Peter", "Harry", "Dougie"];
var result = allNames(names);
console.log(result);


var animals = ["Monkey", "Ferret", "Parrot"]

function add(animal) {
  return animals.push(animal);
};

var result = add("Panther");
console.log(animals);
