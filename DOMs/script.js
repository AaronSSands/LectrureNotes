// 1. Test
let x = 10;
console.log(x);
​
// 2. Get Element By ID
let testParagraph = document.getElementById("testParagraph")
testParagraph.style.color = "red";
console.log(testParagraph)
​
// 3. Query Selector All & innerText/innerHTML 
let sampleClasses = document.querySelectorAll("p.sampleClass");
sampleClasses[0].innerText = "My text has changed!"
​
sampleClasses.forEach(pTag => {
    pTag.innerHTML = "<i class='testing'>My text has changed using a forEach method!</i>"
    // console.log(pTag);
})
​
/*
innerText - simply references or allows us to change the text of a specified element. Will return only visible text in a "node"
textContent - does the same thing that innerText does, but will return the FULL text of a "node"
innerHTML - allows us to set text as well as HTML elements, which will be nested inside of the current HTML element we are referencing
*/
​
// 3.5. textContent vs innerText Example
console.log(document.getElementById("spanTest").innerText);
console.log(document.getElementById("spanTest").textContent);
​
// 4. addEventListener - click
// document.getElementById("clickThisButton").addEventListener("click", event => {
//     event.target.style.backgroundColor = "blue";
// })
​
/*
************
CHALLENGE
************
    - make the button toggle between red and blue when clicked
*/
​
// document.getElementById("clickThisButton").addEventListener("click", function() {
//     this.style.backgroundColor = this.style.backgroundColor == "red" ? "blue" : "red";
// })
​
document.getElementById("clickThisButton").addEventListener("click", event => {
    if (event.target.style.backgroundColor == "red") {
        event.target.style.backgroundColor = "blue";
    } else {
        event.target.style.backgroundColor = "red";
    }
})
​
// 5. addEventListener - Keyup / getElementsByTagName
document.getElementById("nameInput").addEventListener("keyup", event => {
    console.log(event.target.value);
    let allPTags = document.getElementsByTagName("p");
    allPTags[0].innerText = "Nothing has been typed.";
​
    if (event.target.value == "") {
        allPTags[1].innerText = "Nothing has been typed!";
    } else {
        allPTags[1].innerText = `Everyone, please say hello to ${event.target.value}!`;
    }
})