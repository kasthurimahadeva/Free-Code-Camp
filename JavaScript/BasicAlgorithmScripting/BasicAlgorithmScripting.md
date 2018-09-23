# Basic Algorithm Scripting
## String.substr()
### Syntax
> str.substr(start[, length])

* start : The index of the first character to include in the returned substring.
* length : Optional. The number of characters to extract.
* return value : A new string containing the specified part of the given string.

### Example

```javascript
var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```

<hr>

## String.substring()

### Syntax

> str.substring(indexStart[, indexEnd])

* indexStart : The index of the first character to include in the returned substring.
* indexEnd : Optional. The index of the first character to exclude from the returned substring.
* return value : A new string containing the specified part of the given string.

### Example
```javascript
var anyString = 'Mozilla';

// Displays 'M'
console.log(anyString.substring(0, 1));
console.log(anyString.substring(1, 0));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

```javascript
// Displays 'illa' the last 4 characters
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Displays 'zilla' the last 5 characters
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

<hr>

### String.substr() VS String.substring()

```javascript
var text = 'Mozilla';
console.log(text.substring(2,5)); // => "zil"
console.log(text.substr(2,3)); // => "zil"
```

<hr>

## String.repeat()

### Syntax
> str.repeat(count);

### Example
```javascript
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
```

> **This method has been added to the ECMAScript 2015 specification and may not be available in all JavaScript implementations yet.**

<hr>

## Polyfill

> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

<hr>

## Array.every()

### Syntax

> arr.every(callback[, thisArg])

Callback function is taaking three arguments.
1. currentValue(required) : The current element being processed in the array.
1. index(optional) : The index of the current element being processed in the array.
1. array (optional) : The array every was called upon.

### Example

```javascript
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```
