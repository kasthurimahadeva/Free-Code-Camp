// Finding Keepers
//my idea

function findElement(arr, func) {
    let num = undefined;
    for(let i = 0; i < arr.length; i++){
      if(func(arr[i])){
        num = arr[i];
        break;
      }
    }
    return num;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);


// short way
function findElement(arr, func) {
    let filterArr = arr.filter(func); //filter array with the function provided
  
    return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
}
  
// test here
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });