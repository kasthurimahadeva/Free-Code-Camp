// Missing letters

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let start = str.charCodeAt(0);
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) !== start + i){
        return String.fromCharCode(start + i);
      }
    }
    return undefined;
}
  
fearNotLetter("abce");