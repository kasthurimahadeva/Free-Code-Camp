//Declare variable using var
//let is a function-scope
for(var a = 1; a <= 5; a++){
    console.log(a);
}

console.log(a);

/*Output
1
2
3
4
5
6
*/

//Declare variable using let
//let is a block-scope
for(let a = 1; a <= 5; a++){
    console.log(a);
}

console.log(a);

/*Output
1
2
3
4
5
Uncaught ReferenceError: a is not defined
    at <anonymous>:4:13
(anonymous) @ VM110:4
*/

//If we use let, variable a's scope is in the for loop(block-scope). 

var a = 2;
console.log(a);

for(var a = 1; a <= 5; a++){
    //something-happen
}

console.log(a);

/*
Output:
2
6
*/

let a = 2;
console.log(a);

for(let a = 1; a <= 5; a++){
    //something-happen
}

console.log(a);

/*
Output:
Uncaught SyntaxError: Identifier 'a' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM119:1
*/

//If we use let, we cannot declare a variable if it is already declared