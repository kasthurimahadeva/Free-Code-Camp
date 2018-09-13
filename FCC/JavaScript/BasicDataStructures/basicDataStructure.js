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


// Remove Items from an Array with pop() and shift()
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
}
  
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));


// Remove Items Using splice()
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']b 

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']

/* We've defined a function, sumOfTen, which takes an array as an argument 
and returns the sum of that array's elements. Modify the function, using splice(), 
so that it returns a value of 10.*/

function sumOfTen(arr) {
    // change code below this line
    arr.splice(1, 2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
  }
  
  // do not change code below this line
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


// Add Items Using splice()
/*We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
Modify the function using splice() to remove the first two elements of the array and add 
'DarkSalmon' and 'BlanchedAlmond' in their respective places.*/

function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    // change code above this line
    return arr;
  } 
   
  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));