// Sort an Array Alphabetically using the sort Method

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  ascendingOrder([1, 5, 2, 3, 4]);
  // Returns [1, 2, 3, 4, 5]
  
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a < b;
    });
  }
  reverseAlpha(['l', 'h', 'z', 'b', 's']);
  // Returns ['z', 's', 'l', 'h', 'b']

// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort((a,b) => a > b);
    
    // Add your code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



// Return a Sorted Array Without Changing the Original Array

/*
Use the sort method in the nonMutatingSort function to sort the elements of an array 
in ascending order. The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArr = arr.concat();
  // let newArr = arr.slice(); - we can use this also to get new non-mutable array.
  return newArr.sort((a, b) => a > b);
  
  // Add your code above this line
}
nonMutatingSort(globalArray);