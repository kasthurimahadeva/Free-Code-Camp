// Use typeof to Check the Type of a Variable

let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof seven);
console.log(typeof three);

// Catch Misspelled Variable and Function Names

//before
// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = recievables - payable;
// console.log(`Net working capital is: ${netWorkingCapital}`);

//after
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);


// Catch Unclosed Parentheses, Brackets, Braces and Quotes

//before
// let myArray = [1, 2, 3;
//     let arraySum = myArray.reduce((previous, current =>  previous + current);
//     console.log(`Sum of array values is: ${arraySum}`);

// after
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);


// Catch Mixed Usage of Single and Double Quotes

// before
// let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
// console.log(innerHtml);

//Way - 1
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

//Way - 2
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);


// Catch Use of Assignment Operator Instead of Equality Operator

// before

// let x = 7;
// let y = 9;
// let result = "to come";
// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }
// console.log(result);

// after

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);