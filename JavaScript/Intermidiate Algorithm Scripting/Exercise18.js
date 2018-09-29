// Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property
and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
 */

// my idea
function truthCheck(collection, pre) {
    // Is everyone being true?
    let newCollection = collection.filter((obj) => {
        if(Boolean(obj[pre])){
            return obj;
        }
    });
    if(collection.length === newCollection.length){
        return true;
    }
    return false;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// other idea
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}