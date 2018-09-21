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



// Refactor Global Variables Out of Functions

/*
Refactor (rewrite) the code so the global array bookList is not changed inside either function. 
The add function should add the given bookName to the end of an array. 
The remove function should remove the given bookName from an array. 
Both functions should return an array, and any new parameters should be added before the bookName one.
*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  let oldBookList = bookList.slice();
  oldBookList.push(bookName);
  return oldBookList;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
let oldBookList = bookList.slice();
  if (oldBookList.indexOf(bookName) >= 0) {
    oldBookList.splice(oldBookList.indexOf(bookName), 1);
    return oldBookList;
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);