// My idea

function reverseString(str) {
    let arr = Array.from(str);
    str = "";
    for (let i = arr.length - 1; i >= 0; i--){
      str += arr[i];
    }
    return str;
  }
  
  reverseString("hello");

// Short way
function reverseString(str) {
    return str.split('').reverse().join('');
}
  
reverseString("hello");