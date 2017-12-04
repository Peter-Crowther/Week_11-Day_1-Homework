var pets = ["cat", "dog", "pika", "chicken"]

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

var favouriteFruits = {
  "Jarod" : "Mango",
  "Tony" : "Pear",
  "Finn" : "Apple"
};

for (var key in favouriteFruits) {
console.log(key);
console.log(favouriteFruits[key]);
};

var counter = 0;
while (counter <= 10) {
  console.log("The counter is " + counter);
  counter += 1;
}
