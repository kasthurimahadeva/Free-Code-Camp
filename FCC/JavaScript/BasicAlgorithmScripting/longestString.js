// Find the Longest Word in a String
// my idea
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let length = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > length){
        str = arr[i];
        length = arr[i].length;
      }
    }
    return str.length;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");