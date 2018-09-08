//Use the Spread Operator to Evaluate Arrays In - Place
"use strict";
var arr = [6, 89, 3, 45];
var maximum = Math.max(arr);
console.log(maximum); // NaN (NaN - Not a Number)
//Math.max() expects comma-seperated arguments, not an array

//ES5 code
maximum = Math.max.apply(null, arr);
console.log(maximum);   // 89

//ES6 code
//The spread operator makes this syntax much better to read and maintain

maximum = Math.max(...arr);
console.log(...arr);    // 6 89 3 45
console.log(maximum);   // 89