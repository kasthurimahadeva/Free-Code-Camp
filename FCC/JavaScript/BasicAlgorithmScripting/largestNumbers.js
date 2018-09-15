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