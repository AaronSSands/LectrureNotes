/*
-A falsy value is a value that is considered false when encountrered 
in a BOOLEAN context
     -false
     -0
     -"",'',``
     -Null
     -undefined
     -NaN(not a number)
        
        -This means when JS is expecting a BOOLEAN and it is given one of the values above,
        it will always evaluate to "falsy"
 */

        let isOn = true;

        if (isOn) {
            console.log("The light is on");
         }

         isOn = false;

         if (isOn == false) {
             console.log("The light is off");
         }

         let weather = 55;

         if (weather < 70) {
             console.log("Wear a jacket");

         }
