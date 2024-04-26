// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    var morningGreeting = "Good morning";
}
console.log(greeting);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Good morning, ${name}.`
}

console.log(customGreeting("Zelalem"));
console.log(customGreeting("Billy"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return firstName + " " + middleName + " " + lastName;
}

console.log(greetPerson("Zelalem", "T", "Fitru"));
console.log(greetPerson("Bruce", "Thomas", "Wayne"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(number) {
    squareRoot = Math.sqrt(number);
    return squareRoot;
}

console.log(square(16));
console.log(square(144));


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if(quantity = 4 && item === "Coffee") {
        console.log("Coffee is stocked");
    }
    if(quantity = 3 && item === "Tortillas") {
        console.log("Tortillas - running Low");
    }
    if(quantity = 0 || item === "Cheese") {
        console.log("Cheese - OUT of stock!");
    }
    if(quantity = 1 && item === "Salsa") {
        console.log("Salsa - running Low");
    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
