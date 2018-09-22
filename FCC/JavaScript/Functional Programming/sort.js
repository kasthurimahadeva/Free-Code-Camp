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