/*
-Properties are qualities associated with a data type
-Strings only have one singular property for us to access, that being the length property
*/

let myName = "Aaron";
console.log(typeof myName.length);

/*
-Methods are tools that can help us manipulate data
-.property vs .method()
-Methods are functions associated with data types
*/

let myNameIs = "Aaron";
console.log(myNameIs.toUpperCase());


//Used to search out specifics
let home = "M home is Muncie";
console.log(home.includes("Muncie"));


// Challenge: Use google, find MDN documentation for Strings, 
//research and use the split method to get an array back from this string.



let sent = 'This sentence will be split into individual parts';
console.log(sent.split(" "));
