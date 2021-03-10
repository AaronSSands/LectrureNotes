/**
let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket!");
    
} else {
    console.log("No jacket necessary");

}
*/

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'

let myName = 'Aaron Sands';

if (myName == 'Aaron Sands') {
    console.log(myName);
} else {
    console.log('Hello, What is your name?');
} 

let myNameTwo = 'Aaron Sands'

if (myNameTwo == 'Aaron Sands') {
    console.log('Hello, My name is ' , myNameTwo);
} else {
    console.log('Hello, is your name ' , myNameTwo);
}
*/

/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, 
    console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, 
    and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter 
    of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of 
    the string to lowercase
*/
/*
let myName = 'zAchARy';

if (myName.charAt(0) === myName.charAt(0).toUpperCase()){
    console.log(myName);
    }else {
    console.log('Hey, This isnt written correctly');
}

if (myName[0] === myName[0].toUpperCase()) {
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}

//Gold
let results = "";
​
if (myName[0] === myName[0].toUpperCase()){
    results = myName[0] + myName.substr(1).toLowerCase();
} else {
    results = myName[0].toUpperCase() + myName.substr(1).toLowerCase();
}
console.log(results)
​
// console.log(results += myName.substr(1).toLowerCase());
*/

//Else if statements

let age = 32;

if (age <= 17) {

    console.log("Sorry, you're too young to do anything.");

} else if (age >= 25) {

    console.log("You can rent a car!");

} else if (age >= 21) {

    console.log("You can drink!!");

} else  {

    console.log("You can vote");

}

