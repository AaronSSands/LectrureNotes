/*
FIZZBUZZ CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

for (let fb = 1; fb <= 100; fb++) {
    if (fb % 3 === 0 && fb % 5 === 0) {
        console.log("FizzBuzz");
    }else if (fb % 3 === 0) {
        console.log("Fizz");
    }else if (fb  % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(fb);
    }
}