// Sum All Numbers in a Range

function sumAll(arr) {
    let sortedArr = arr.sort((a, b) => a > b);
      let sum = 0;
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++){
      sum += i;
    }
    return sum;
}
  
sumAll([1, 4]);