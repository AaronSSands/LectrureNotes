/**
 -First pass: stores our vaiable/function declarations, but does not assign values. Anything that 
 needs hoisted is hosited here.
 -Second  pass: assigns the values to our variables and executes any hoisted source code.
 */

 //console.log(myName);
 //let myName = "Aaron";

b();

 function b() {
     console.log("I have been hoisted!");
 }