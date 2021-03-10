/*A ternary basically ascts like a shortcut to writing if, if/else, and else/if statements

let num = 6;

//ternary
     // (if)                 (else)
(num > 0) ? console.log("yes") : console.log("no")

//instead of
if (num > 0) {

    console.log("yes");

} else {

    console.log("no");

}


(num == 0) ? console.log("Hello") : (num < 0) ? console.log("Hi") :
console.log("Good-Bye");
*/

let age = 30;

(age >= 25) ? console.log("Yay, You can rent a car!") : (age >= 21) ? 
console.log("Yay, You can drink!") :
(age >= 18) ? console.log("Yay, you can vote!") : 
console.log("Sorry, you're too young to do anything fun.");