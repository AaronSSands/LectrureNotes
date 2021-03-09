/****
 Types
 */

 /*
 BOOLEANS

 -Are ONLY True or False values
 -
 */

 let on = true;
 console.log(on);

 let off = false;
 console.log(off);

 /*
 NULL

 -Null is like an empty bucket, it has the capcity to be filled , but it currently is not
 */

 let emptyBucket = null;
 emptyBucket = 'water';
 console.log(emptyBucket);

/**
 UNDEFINED
 - Currently has no value assigend
 -Acts as the means(plastic/metal) to create the bucket
 */

 let metal; //correct way to assign an undefined variable

 //let metal = undefined; //Wrong way 

 console.log(metal);

 //NULL vs. UNDEFINED
 //******************
 /***
  _ Null is like an empty bucket, the bucket
  is there, but there's nothing in it

  -UNDEFINED is like the materials we will use to create the bucket

  We can salso think of these two variables as pizza boxes

  -Null is like an empty pizza box, just waiting for a pizza

  -Undefined is like the unassembled box
  */

  let emptyBox = null
  let unassembledBox;

  console.log(emptyBox);
  console.log(unassembledBox);


  /**
   NUMBERS
   -In JS numbers are just numbers
   -You can add, subtract, multiply, and divide
   -You can use decimals
   */
   
   let degrees = 90;
   console.log(degrees);

   //will console.log() as 999999999999999
   let precise = 999999999999999
   console.log(precise);

   //will console.log() as 1000000000000000
   let rounded = 9999999999999999
   console.log(rounded);

   //will console.log() as 0.30000000000000004
   let notQuite = 0.2 + 0.1;
   console.log(notQuite);

//Function to convert a string to numbers IF that string is a number

let a = Number('123');
console.log(a);

/**
 *STRINGS
 -A string is any value between a set of quotes or back ticks
 -A string can be denoted by '', "" , ``\
 - 'string' === "string" === `string`
 */

 let stringOne = "double quotes";
 let stringTwo = 'single quotes';
 console.log(stringOne, stringTwo);

 //NUMBER vs. STRINGS

 let addition = 1050 + 100;
 console.log(addition);

 let concatenation = '1050' + '100';
 console.log(concatenation);

 console.log(typeof addition);
 console.log(typeof concatenation);

 /**
  OBJECTS
  -Can be dnoted by {}
  -Objects store two things, a Keyu and a Value
  -We can access these values, by digging into an object with dot notation

  object.value

  */

  //we want to create an app like spotify
  //we want to take in an artists name, amount of albums they've produced, all members are still alive?

  let artist = {
      //key  //value
      name: 'Queen',
      albums: 15,
      allMembersAlive: false
  }
  console.log(artist);

  //Example of dot notation
  console.log(artist.allMembersAlive);
  console.log(typeof artist.name);

  //how to add an object
  artist.songName ='I want it all';
  console.log(artist.songName);

  //How to change an objects value
artist.songName = 'Bohemian Rhapsody';
console.log(artist);

/**
 ARRAYS
 
 let list = [ 'item1' , 'item2' , 'item3' ]
                 0         1         2
    - Denoted by[]
    -You can access a value by digging into the array with [0]
 */

    let burritos = ['large', 4, true];

    console.log(typeof burritos)

    //ADDITION vs. CONCATENATION
    //addition is adding numbers together
    //Concantenation is adding strings together

    let add = 100 + 100;
    console.log(add);

    let concat = 'Aaron ' + 'Sands';
    console.log(concat);

    let stillConcat = '1050' + 100;
    console.log(stillConcat);
