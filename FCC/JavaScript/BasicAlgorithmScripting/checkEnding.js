// Confirm the Ending

// my idea
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let tarLen = target.length;
    let strLen = str.length;
    let newStr = str.slice((strLen - tarLen), strLen);
    if(newStr === target){
      return true;
    }
    return false;
}
  
confirmEnding("Bastian", "n");