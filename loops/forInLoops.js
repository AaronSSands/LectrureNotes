/**
 -For in loops are great for iterating over values in an object. Properties in objects are what's 
 called enumerable
 
 - Foe in loops iterate over an object's enumerable properties

 */

 let student = {
     name: "Peter",
     awesome: true,
     degree: "JavaScript",
     Week: 1
 }

 for (item in student) {
    // console.log(item);
    // console.log(student[item]);
        
 }

 let catArray = ["tabby","british shorthair", "burmese", "maine coon",
"rag doll"];

for (cat in catArray) {
    //console.log(cat);
    //console.log(catArray[cat]);
}

let myName = "aaROn";
let capName;

for (let l in myName) {
    if(l == 0) {
        capName = myName[l].toUpperCase();

    } else {
        capName += myName[l].toLowerCase();
    }

}
    
//console.log(capName);