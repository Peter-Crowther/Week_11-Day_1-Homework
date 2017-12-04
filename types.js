// var myString = "A piece of text.";
// myString = 5; //dynamically typed so can change the type.

//Number
var wholeNumber = 1;
var negativeNumber = -1;
var float = 2.5;
//all just numbers in js.

//String
var myString = "a peice of text";
result = myString.length;
console.log(result);
myString.toUpperCase();

var name = "Fred"
var greeting = `Hi there, ${ name }`;
console.log(greeting)

//Undefined
var a;

//between these two lines, a is undefined, variable that has not been initialised.

a = 1;

//Boolean, take care on == as it can get confused. Can use a === instead 99.99% of the time.
// there are also not equal != and !==, second is strict! not sure what that means.
//everything will be true when converted to a Boolean, except; null, false, NaN,
//empty string, 0, and undefined.
