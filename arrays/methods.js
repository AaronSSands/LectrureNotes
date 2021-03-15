let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    console.log(foodItem);
}

food.push("Pizza");
console.log("Push", food);

food.splice(1, 1, "Banana");
console.log(food);

food.pop();
console.log(food);

let foodShift = food.shift();
console.log(foodShift);
console.log("Shift: ", food);

let foodUnshift = food.unshift("Popcorn", "Steak");
console.log(foodUnshift);
console.log("Unshift: ", food);
