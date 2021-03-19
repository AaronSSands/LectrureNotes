// async function myFunction () {
//     //await
// }

// const myFunc = async () =>  {
//     //await
// }

// /**
//  * Two key differences between regular functions and asycn function:
//  *    - Async Functions:
//  *          -Unlocks the use of the await keyword
//  *          -Always returns a promise
//  */

// async function fn() {
//     return Promise.reject ("Hello");

// }

//  fn() 
// .then(console.log)
// .catch(console.log)

function firstLockBox() {
    return new Promise(function(resolve, reject) {
        if(true) {
            resolve(12345);
        } else {
            reject(Error("Unexpected Error!"));
        }
    })
}

function secondLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 12345) {
            resolve(98765);
        } else {
            reject(Error("Wrong Key!"));
        }
    })
}

function thirdLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 98765) {
            resolve("Treasure!");
        } else {
            reject(Error("Wrong Key!"));
        }
    })
}

async function openBoxes() {
    let firstBox = await firstLockBox();
    let secondBox = await secondLockBox(firstBox);
    let thirdBox = await thirdLockBox(secondBox);
    console.log("first: " ,firstBox);
    console.log("second: ", secondBox);
    console.log("third: ", thirdBox);
}

openBoxes();