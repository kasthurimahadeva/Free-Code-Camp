// Factorialize a Number
// my idea
function factorialize(num) {
    let ans = 1;
    for (let i = 2; i <= num; i++){
      ans *= i;
    }
  
    return ans;
  }
  
  factorialize(5);

 // short way
 function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5); 