// Mutations
// my idea
function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split('');
    let arr2 = arr[1].toLowerCase().split('');
    let count = 0;
    for(let i = 0; i < arr2.length; i++){
      for(let j = 0; j < arr1.length; j++){
        if(arr2[i] === arr1[j]){
          count++;
          break;
        }
      }
    }
    if(count === arr2.length){
      return true;
    }
  
    return false;
}
  
mutation(["hello", "hey"]);


// other ways
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (let i=0;i<test.length;i++) {
      if (target.indexOf(test[i]) === -1)
        return false;
    }
    return true;
}
  
  
mutation(["hello", "hey"]);

// short way
function mutation(arr) {
    return arr[1].toLowerCase()
      .split('')
      .every(function(letter) {
        return arr[0].toLowerCase()
          .indexOf(letter) !== -1;
      });
}
  
mutation(["hello", "hey"]);