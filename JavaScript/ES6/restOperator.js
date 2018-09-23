//Use the Rest Operator with Function Parameters
//we can create functions that take a variable number of arguments.

"use strict";

function howMany(...args){
    return "You have passed " + args.length + " arguments";
}

console.log(howMany(0, 1, 2)); //You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments

//additionn
function sum(...args){
    return args.reduce((a, b) => a+b , 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(3, 6, 9, 12)); // 30