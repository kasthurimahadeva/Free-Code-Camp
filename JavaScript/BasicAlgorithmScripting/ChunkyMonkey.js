// Chunky Monkey
//my idea
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let bal = arr.length % size;
    for(let i = 0; i < ((arr.length + bal) / size); i++){
      newArr.push(arr.slice((i * size), ((i + 1) * size)));
    }
    // Break it up.
    return newArr;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// short way1
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0,size));
    }
    return newArr;
}

//short way2
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    var i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i+size));
      i += size;
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2); 


// short way3
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr2 = [];
    for (var i = 0; i < arr.length; i+=size) {
      arr2.push(arr.slice(i , i+size));
    }
    return arr2;
}