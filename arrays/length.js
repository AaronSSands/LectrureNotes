let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "red", "yellow"];
console.log(colors.length);
console.log(colors.toString());

console.log(typeof colors);

let arr = [1, 2, 3, 4, 5]

console.log(arr instanceof Array);

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));

} else {
    console.log("Not an Array!");

}