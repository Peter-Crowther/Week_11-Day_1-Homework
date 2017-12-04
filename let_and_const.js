const myMoney = 10; //const makes the variable constant and therefore can't
//reassign to something else



// let taxHaven; //if you need to reassign, use let rather than const.
// // In case below no longer just accessed by the if statement therefore can print to consol
// if ( myMoney > 5 ) {
//   taxHaven = myMoney * myMoney;
// }
// console.log(taxHaven);


// undefined as name before defined, this is called hoisting, var lets it run
//whereas let and const would give an error, therefore traceable and better.
console.log(name);
var name = "Peter";


function sayHello() {
  console.log("Hello");
}
