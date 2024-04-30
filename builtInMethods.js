// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
console.log("Hello World".toLowerCase("Hello World"));
//In this line of code the built-in method (.toLowerCase) is designed to change what is in the parentheses to be lowercase.

"Hello World".includes("Hello");
console.log("Hello World".includes("Hello"));
console.log("Hello World".includes("d"));
//In this line the built-in method (.includes) outputs a boolean true or false depending on what is included -
// in the parentheses.

"Hello World".endsWith("Hello");
console.log("Hello World".endsWith("Hello"));
// This is also a boolean output because the built-in method is checking if what is inside the (.endsWith) parentheses -
// is true or false. In this case the string is not ending with "Hello".

"Hello World".endsWith("rld");
console.log("Hello World".endsWith("rld"));
// The output of this will be true because the string does end with "rld".


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var roomate1 = "Joe";
var roomate2 = "Mike";

// This method will print out the character that is specified in the parentheses. In this case "M" is 0, "i" is 1, "k" is 2, and "e" is 3. 
// So the output will be e
console.log(roomate2.charAt(3));

// This mehtod adds the strings assined to the variable to output a complete sentence in this line of code.
console.log("My roomates are",roomate1.concat(" and ", roomate2));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var sodas = ["Coke", "Pepsi", "Dr. Pepper", "Fanta"];
var snacks = ["Chips", "Nuts", "Popcorn", "Oreo"];

// For this method i used (.push), this allowed me to add a string to the array at the end of the list.
snacks.push("Candy");
console.log(snacks);

// Using this method it outputs the elements that are only in the parentheses. 
// It includes the begining of the element in this case "0" being "Coke" but it stops at "2" which is "Dr. Pepper" -
// it doesn't include "Dr. Pepper", only what is between "Coke" and "Dr. Pepper".
console.log(sodas.slice(0, 2));
