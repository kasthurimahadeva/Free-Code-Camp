// DNA Pairing

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and 
return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into 
one encapsulating array.
*/

function pairElement(str) {
    let arr = str.split("");
    arr = arr.map(pairing);
    return arr;
  }
  
  function pairing(x){
    if(x === "A"){
      return [x, "T"];
    }
  
    else if(x === "T"){
      return [x, "A"];
    }
  
    else if(x === "C"){
      return [x, "G"];
    }
  
    else if(x === "G"){
      return [x, "C"];
    }
}
pairElement("GCG");



// Short way
function pairElement(str) {
    //define a map object with all pair possibilities 
    var map = {T:'A', A:'T', G:'C', C:'G'};
    //split str into a char Array
    let strArr = str.split('');
    //replace each Array item with a 2d Array using map
    for (var i=0;i<strArr.length;i++){
      strArr[i]=[strArr[i], map[strArr[i]]];
    }
   return strArr;
}
pairElement("GCG");