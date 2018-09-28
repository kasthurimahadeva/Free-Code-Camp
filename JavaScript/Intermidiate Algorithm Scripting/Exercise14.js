//  Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly
divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
    arr = arr.sort((a, b) => a < b);
    let n = 1;
    let num;
    let numArr = [];
    for(let i = arr[0]; i >= arr[1]; i--){
        numArr.push(i);
    }

    var i;
    do {
        num = n * numArr[0] * numArr[1];
        for(i = 2; i < numArr. length; i++){
            if(num % numArr[i] !== 0){
                break;
            }
        }
        n += 1;
    }
    while(i !== numArr.length);

    return num;
}


smallestCommons([23, 18]);