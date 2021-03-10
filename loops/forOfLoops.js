/**
 -For of loops both do the same thing which is loop over data 
 structures. There is one key difference , what the iterate over.

     -For in loops iterate over the enumerable properties in an object.
     -For of loops iterate over the values of an iterable object.
 */

     let catArray = ["tabby","british shorthair", "burmese", "maine coon",
"rag doll"];

for (cat of catArray)  {
    //console.log(cat);

}

/*cant use for of loops on objects
let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    Week: 1
}

for (stud of student) {
    //console.log(stud);
}
*/

//for of loops are best used on arrays
//for in loops are best used on objects
