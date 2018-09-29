// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

// my idea
function steamrollArray(arr) {
    return arr.toString().replace(',,', ',').split(',').map(change);
}

function change(x){
    if (x == '[object Object]') {
        return {};
    } else if (isNaN(x)) {
        return x;
    } else {
        return parseInt(x);
    }
}

steamrollArray([1, [2], [3, [[4]]]]);



// other idea
function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

flattenArray([1, [2], [3, [[4]]]]);