// Avoid Mutations and Side Effects Using Functional Programming

/* Fill in the code for the function incrementer 
so it returns the value of the global variable fixedValue increased by one. */

// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  return fixedValue + 1;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4



// Pass Arguments to Avoid External Dependence in a Function

/*
Let's update the incrementer function to clearly declare its dependencies.
Write the incrementer function so it takes an argument, and then increases the value by one.
*/

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (value) {
  return value + 1;
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4