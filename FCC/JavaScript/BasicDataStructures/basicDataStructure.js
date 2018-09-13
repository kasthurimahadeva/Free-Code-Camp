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


// Copy Array Items Using slice()
/*
We have defined a function, forecast, that takes an array as an argument. 
Modify the function using slice() to extract information from the argument array 
and return a new array that contains the elements 'warm' and 'sunny'.
*/

function forecast(arr) {
    // change code below this line
    arr = arr.slice(2, 4);
    return arr;
}
  
// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

/*
We have defined a function, copyMachine which takes arr (an array) and num (a number) 
as arguments. The function is supposed to return a new array made up of num copies of arr. 
We have done most of the work for you, but it doesn't work quite right yet. 
Modify the function using spread syntax so that it works correctly 
(hint: another method we have already covered might come in handy here!).
*/

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
    newArr.push([...arr]);
  
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));


// Combine Arrays with the Spread Operator
/*
We have defined a function spreadOut that returns the variable sentence, 
modify the function using the spread operator so that it returns the array 
['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];// change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());