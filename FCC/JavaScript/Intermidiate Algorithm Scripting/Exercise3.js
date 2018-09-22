// Seek and Destroy

/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.
*/

// my idea
function destroyer(arr) {
    // Remove all the values
    let newArr = [];
    for(let i = 1; i < arguments.length; i++){
      newArr.push(arguments[i]);
    }
  
    return arr.filter((x) => !(newArr.includes(x)));
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);




// short way
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  return arr.filter((x) => !(args.includes(x)));
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);