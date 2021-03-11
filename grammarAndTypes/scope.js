/**
 -Scope is how a computer keeps track of all the variables in a program.
 -Scopes can also be nested , where there is an outer scope( think global scope)
 that encloses an inner scope (think local scope).
    -Think about global scope as planet earth. Everything belongs to or is on
    Earth itself. We live in Indianapolis, which could be 
    considered our local scope.
 */

    let x = 12

    function scope() {
        let x = 33;
        console.log("local", x);
    }

    scope();
    console.log("Global", x);

/**
 -With the introduction of ES6 came two more keywords to declare
 variables: const and let.
 -const is constant that cannot be changed 
 - var and let seem to operate the samem But while they have a lot of the 
 same functionality, they behave a little differently.
     -let is scoped to the nearst ENCLOSING block, where var is scoped
     to the nearest FUNCTION block
 */

     var y = 12;
     function varTest() {
         var y = 33;
         if (true) {
             var y = 45;
             console.log("If Block:", y);
         }
         console.log("Function Block:", y);
     }

     varTest();
     console.log("Global:", y);