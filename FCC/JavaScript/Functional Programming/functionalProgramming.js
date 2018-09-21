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