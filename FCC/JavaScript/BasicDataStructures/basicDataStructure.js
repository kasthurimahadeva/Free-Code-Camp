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


// Check For The Presence of an Element With indexOf()
/*
indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
We have defined a function, quickCheck, that takes an array and an element as arguments. 
Modify the function using indexOf() so that it returns true if the passed element exists 
on the array, and false if it does not.
*/

function quickCheck(arr, elem) {
  // change code below this line
  if(arr.indexOf(elem) >= 0){
    return true;
  }

  return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//  Iterate Through All an Array's Items Using For Loops
/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, 
and returns a new array. elem represents an element that may or may not be present on one or 
more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version 
of the passed array such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  let result;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === elem){
        result = false;
        break;
      }
      result = true;
    }
    if(result){
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// Create complex multi-dimensional arrays
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [
    ['deep',
      ['deeper',
        ['deepest']
      ]
    ]
  ],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];



// Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// change code above this line

console.log(foods);


// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity['data']['online'] = 45;
// change code above this line

console.log(userActivity);