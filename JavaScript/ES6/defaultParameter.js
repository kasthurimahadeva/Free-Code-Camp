//Set default Parameter to function

"use strict";
function greeting(name = "Anonymous"){
    return "Hello " + name;
}

console.log(greeting("Panda"));
console.log(greeting());

/*
output
Hello Panda
Hello Anonymous
*/