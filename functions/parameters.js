/**
 -Function parameters are place holders for data that we pass into the function when 
 invoking the function
                   (1)
     function hi (name) {
         console.log(`Hi ${name}`);
                           (2)
     }
           (3)
     hi ("Aaron");

     1-The parameter(s) that the function is accepting or holding
     2-Using string interpolation, we can refer to the parameter given to the function
     3- This is where we define what the parameter's value will be
      */

    // function aaron(ticket) {
    //     console.log(`I exchanged my ticket for a ${ticket}`);
    // }
    // aaron("Cheese Pizza");

     /*example
     let arr = ['This', 'is', 'really', 'cool'];

function sendMessage(x) {
    for (let words of x) {
        console.log(words);
    }
}

sendMessage(arr);
*/

function myName(firstName, lastName) {
    let yourName = "";
    yourName += firstName + " " + lastName;
    console.log("Hello, my name is " + yourName);


}

myName("Aaron", "Sands")
