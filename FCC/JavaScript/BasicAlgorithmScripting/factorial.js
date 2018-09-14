// Factorialize a Number

function factorialize(num) {
    let ans = 1;
    for (let i = 2; i <= num; i++){
      ans *= i;
    }
  
    return ans;
  }
  
  factorialize(5);