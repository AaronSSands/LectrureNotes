let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//regular for loop
for (let i =0; i < food.length; i++) {
    //console.log(food[i]);
}

//food.forEach(foodItem => console.log(foodItem));

//the forEach method CANNOT return a value

//food.forEach((foodItem, index) => console.log(foodItem, index));

/*
CHALLENGE
************
​
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["Iron Man","Capitan America", "Iron Man 3"];

movies.forEach(movieItem => console.log(movieItem));

movies.push("The Avengers");
console.log("Push", movies);

movies.splice(1, 1, "Iron Man 2");
console.log(movies);