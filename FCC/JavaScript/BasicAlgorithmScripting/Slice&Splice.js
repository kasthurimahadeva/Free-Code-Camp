// Slice and Splice 

// my idea
function frankenSplice(arr1, arr2, n) {
    let newArr1 = arr2.slice(n);
    let newArr2 = arr2.slice();
    newArr2.splice(n, (newArr2.length - n), ...arr1);
    newArr2.push(...newArr1);
    // It's alive. It's alive!
    return newArr2;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);


// other solution
function frankenSplice(arr1, arr2, n) {
    var arr2Copy = arr2.slice();
  for (var i = 0; i < arr1.length; i++) {
      arr2Copy.splice(n++, 0, arr1[i]);
  }
return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);