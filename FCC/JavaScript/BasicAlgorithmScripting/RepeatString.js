// Repeat a String Repeat a String
// my idea
function repeatStringNumTimes(str, num) {
    // repeat after me
    if(num <= 0){
      str = "";
      return str;
    }
    let newStr = str;
    for(let i = 2; i <= num; i++){
      str += newStr;
    }
    return str;
}
  
repeatStringNumTimes("abc", 3);