/**
 -Loops offer as a quick and easy way to do something repeatedly,
 or loop over something.
 -There are many kinds of loops but they all roughly do the samething.
    -It will repeat until a specified condition evaluates to true
       - for statement
       -do while statement
       -while statement
       -labeled statement
       -break statement
       -for in statement
       -for of statement
- Note: there is a danger of infinite loops. There are three main parts
 to a loop:
    -initial expression
    -condition
    -increment expression       
 */

   // let i = 7;

   // for (i = 0; i < 10; i++) {
   //     console.log(i);

    //}

   // console.log("Global i variable", i);

   //Challenge 1

   for (i = 0; i <= 20; i = i + 2) {
       //console.log(i);
   }

   //Challenge 2

   for (a = 10; a >= 0; a-- ) {
       //console.log(a);
   }

   //Challenge 3

   for (b = 0; b >= -24; b -= 2 ) {
       //console.log(b);
   }

   //challenge 4
   let myName = "Aaron";

   for (i=0; i < myName.length; i++) {
       console.log(myName.charAt(i));
   }