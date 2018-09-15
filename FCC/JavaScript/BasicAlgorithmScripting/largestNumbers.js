// Return Largest Numbers in Arrays

// my idea
function largestOfFour(arr) {
    // You can do this!
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      let max = Number.NEGATIVE_INFINITY;
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > max){
          max = arr[i][j];
        }
      }
      arr[i] = max;
    }
    return arr;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// other's idea
function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  
      results[n] = largestNumber;
    }
  
    return results;
}


// shortest way
function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);