// Use typeof to Check the Type of a Variable

let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof seven);
console.log(typeof three);

// Catch Misspelled Variable and Function Names

//before
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

//after
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);