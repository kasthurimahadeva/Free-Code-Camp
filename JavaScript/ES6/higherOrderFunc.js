//map()
vals = [2, 4, 6, 8, 10];

function doubler(x){
    return x * 2;
}

doubleVals = vals.map(doubler);
console.log(vals);
console.log(doubleVals);

/*
output
(5) [2, 4, 6, 8, 10]
(5) [4, 8, 12, 16, 20]
*/

//fill()
val = [1, 3, 5, 7, 9];
val.fill(Math.random());
console.log(val);

/*
output
(5) [0.00680761240996719, 0.00680761240996719, 0.00680761240996719, 0.00680761240996719, 0.00680761240996719]
*/

//reduce()
let numbers = [5, 2, 7, 8, 1];
function sum(acc, value){
    console.log(value);
    console.log(acc);
    return acc + value;
}

let answer = numbers.reduce(sum);
console.log(answer);

/*
output
2
5
7
7
8
14
1
22
23
*/

//filter()
const num = [5, 4, 2, 9, 8, 1];
function isEven(n){
    return (n % 2 == 0)
}

evenNum = num.filter(isEven);
console.log(evenNum);

/*
output
(3) [4, 2, 8]
*/

//sort()
// Normal sort()   
let arr = [34, 23, 56, 45];
arr.sort();
console.log(arr);

/*
output
(4) [23, 34, 45, 56]
*/

arr = ["a", "B", "hello", "goodbye", "Hi", 45, 23, "34", "12"];
arr.sort();
console.log(arr);

/*
output
(9) ["12", 23, "34", 45, "B", "Hi", "a", "goodbye", "hello"]

Sorting order
1. Numbers are sorted in assending order(if it is in "" quote)
2. Word start with capital letter and alphebatic order
3. Word start with simple latter and plphebatic order

sort() is only sort numbers and strings, not
*/

let obj = [{x : 2, y : 10}, {x : 5, y : 6}];

function compare(a,b){
    return a.y - b.y;
}

obj.sort(compare);
console.log(obj);

/*
output
(2) [{…}, {…}]
0: {x: 5, y: 6}
1: {x: 2, y: 10}
*/