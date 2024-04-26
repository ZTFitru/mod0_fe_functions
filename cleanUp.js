// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?") 
}

askForName()

// I changed the placement of the console.log line inside the bracket instead of having it in one line
// I changed the placement because I wanted to make it look like a block of codes instead of just a line code. 



// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// For EX 2. I added console.log to output the numbers that were added inside the function. 
// The way the code was written at first did not output the three numbers being added. 


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// The first step was to correct the spelling in the first line and change the word to function.
// I also cleaned up the bracket placement for easier reading, I think it can be a personal preference but it just looks nicer. 


//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}

console.log(average(10, 5));
console.log(average(8, 4));

// For this example, I cleaned up the code block to be easier to look at.
// I added a console.log to output the return variable that was in the function code block.