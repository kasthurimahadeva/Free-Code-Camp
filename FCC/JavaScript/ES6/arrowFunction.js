// Arrow Function

"use strict"
const myFunc = () => {
    const myVar = "value";
    return myVar;
}

//Arrow function syntax allows us to omit keyword "return"
//We can write earlier function like this
//If the function is one line, we do not need to put { }
const myfun = () => "value";

//Arrow function with parameter
const doubler = (item) => item * 2;