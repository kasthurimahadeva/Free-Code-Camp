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

// Basic code solution
function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
}

// Intermediate Code Solution
function repeatStringNumTimes(str, num) {
    if(num < 0)
      return "";
    if(num === 1)
      return str;
    else
      return str + repeatStringNumTimes(str, num - 1);
}

// Advanced Code Solution
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
  }
  
repeatStringNumTimes("abc", 3);
  