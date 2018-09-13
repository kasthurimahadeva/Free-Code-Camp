// Add Items to an Array with push() and unshift()
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
// we can also pass variables, which allows us even greater 
// flexibility in dynamically modifying our array's data.

function mixedNumbers(arr) {
    // change code below this line
      arr.unshift('I', 2, 'three');
      arr.push(7, 'VIII', 9);
    // change code above this line
    return arr;
}
  
// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));