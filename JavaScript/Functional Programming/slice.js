// Return Part of an Array Using the slice Method

/*
Use the slice method in the sliceArray function to return part of the anim array 
given the provided beginSlice and endSlice indices. The function should return an array.
*/

function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    
    return anim.slice(beginSlice, endSlice);
    // Add your code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);




// Remove Elements from an Array Using slice Instead of splice

/*
Rewrite the function nonMutatingSplice by using slice instead of splice. 
It should limit the provided cities array to a length of 3, and return a new array 
with only the first three items.

Do not mutate the original array provided to the function.
*/

function nonMutatingSplice(cities) {
    // Add your code below this line
    return cities.slice(0, 3);
    
    // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);