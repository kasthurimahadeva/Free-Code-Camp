//Diff Two Arrays

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.*/

// my idea

function diffArray(arr1, arr2) {
    var newArr = [];
    checking(arr1, arr2, newArr);
    checking(arr2, arr1, newArr);
    // Same, same; but different.
    return newArr;
  }
  
  function checking(first, second, newArr){
    for(let i = 0; i < first.length; i++){
      if(second.indexOf(first[i]) === -1){
        newArr.push(first[i]);
      }
    }
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// Short way - 1
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Short way - 2
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);