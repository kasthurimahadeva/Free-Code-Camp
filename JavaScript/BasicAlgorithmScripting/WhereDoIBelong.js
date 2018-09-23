// Where do I Belong
// my idea
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((a, b) => a - b);
    for(var i = 0; i < arr.length; i++){
      if(arr[i] >= num){
        return i;
      }
    }
    return i;
}
  
getIndexToIns([40, 60], 50);


// short way
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}
  
getIndexToIns([40, 60], 50);
  
  