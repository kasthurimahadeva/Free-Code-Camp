"use strict";
let obj = {
    name : "FreeCodeCamp",
    review : "Awesome"
};

//prevent object mutation
Object.freeze(obj);

obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

/*
output
Uncaught TypeError: Cannot assign to read only property 'review' of object '<Object>'
    at <anonymous>:8:12
*/