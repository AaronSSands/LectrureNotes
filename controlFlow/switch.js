/**
 - Switch statements execute a block of code depending on different
 cases

 -The switch statement is often used together with a break or a default keyword (or both)
 They are both opitional
    -The break keyword breaks out of the switch block. This will
    stop the execution of more code or case testing inside the block.
    If break is omitted, the next code block in the switch statement is executed.
      -The default keyword specifies some code to run id there is no 
      case match. There can only be one default keyword in a switch.
      Although this is opitional, it is recommended that you use it, as it takes care of unexpected 
      cases.
 */

      let officeCharacter = "Kevin";

      switch (officeCharacter) {
          case "Michael":
              console.log("My mind is going a mile an hour");
              break;
          case "Dwight":
              console.log("Perfectenschlag");
              break;
          case "Kevin":
              console.log("A mistake plus kelevin gets you home by seven");
              break;
           default:
               console.log(`I'm sorry, ${officeCharacter}, but do i know you?`);           

      }

      let dessertMenu = "Pie"

      switch (dessertMenu) {
          case "Cake":
              console.log("cake is great!");
              break;
           case "Ice Cream":
            console.log("I scream for Ice Cream!");
            break;
          case "Pie":
              console.log("Pie, pie is oh my!");
              break;
           default:
               console.log(`${dessertMenu}, Is not on the menu.`);     
      }

