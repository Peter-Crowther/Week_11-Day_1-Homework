var name = "Peter";

var talk = function() {
  console.log("My name is " + name);
}

talk()
console.log("The name is " + name);



var globalvariable = 99;

var seperateFunction = function () {
  var seperateA = 2;

}

var outerFunction = function () {
  var outerA = 1;

  var innerFunction = function () {
    console.log('outerA', outerA); // can be seen here
    console.log('globalvariable', globalvariable); // can be seen here
    console.log('seperateA', seperateA );  // can't be seen as it's locked in another function.
  }
  innerFunction();
}

outerFunction();
seperateFunction();
