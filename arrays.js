
//arrays in js are objects, and in data structure they are more like hashes
//under the hood
var myArray = {
  0: "first",
  1: "second",
  2: "third"
}

//but they can be defined normlly
var guitars = ["Fender", "Gibson", "Gretsch", "Ibanez", "PRS"]
console.log("guitars:", guitars);

var drums = [];
var drums = new Array(); //this can cause unexpected behaviour so avoid.

guitars[0]; //access first item.
console.log(guitars[1]);

guitars[5] = "Yamaha";
console.log("guitars:", guitars);

console.log("guitars", guitars.length);

guitars.push("Yamaha");
var removedGuitar = guitars.pop();
console.log(removedGuitar);
console.log(guitars);




//remove the first element from an aray
var first = guitars.shift(); // remove Apple from the front
console.log(guitars);
//Add element to the beginning of an array.
var newLength = guitars.unshift("Crowther") // add to the front
console.log(guitars);
//Remove the third element from an array.
var removedItem = guitars.splice(2, 1); // this is how to remove an item by index position, from position 2, remove 1 element.
console.log(guitars);
