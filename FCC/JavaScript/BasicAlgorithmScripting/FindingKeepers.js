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