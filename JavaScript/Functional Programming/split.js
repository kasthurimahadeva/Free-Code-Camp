// Split a String into an Array Using the split Method

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]


/*
Use the split method inside the splitify function to split str into an array of words. 
The function should return the array. Note that the words are not always separated by spaces, 
and the array should not contain punctuation.
*/

function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);
    
    // Add your code above this line
}
splitify("Hello World,I-am code");