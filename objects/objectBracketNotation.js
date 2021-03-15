/**
 -Object bracket notation can also allow us to find a value in an object
 -Using object bracket notation can be handy if we want to store a key in a variable
 and then ues that variable to parse through an object.
 -This works because all keys in an object are strings
 */

 let garden = {
     vegetable: "zucchini",
     flower: "Sun Flower",
     fruit: "Grape",
     water: true,
     sun: true,
     size: 10
 }

 let test = Object.keys(garden);
 console.log(test);
 console.log(typeof test[0]);

 console.log(garden.vegetable);
 console.log(garden["vegetable"]);

 let baking = {};
 baking["zucchini"] = "Better make some bread";
 console.log(baking);