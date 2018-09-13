# JavaScript - Basic Data Structures
 ## Array
 > typeof array is object

 There are two type of arrays.
 
 1. *One-dimensional array* 
        
    > only has one level

    > does not have any other arrays nested within it.

    > contains *booleans, strings, numbers*, among other valid Javascript data types.

    ```javascript
    let simpleArray = ['one', 2, 'three’, true,    false, undefined, null];
    console.log(simpleArray.length);
    ```
2. *Multi-dimensional array*

    > an array that contains other arrays.

    ```javascript
    let complexArray = [
        [
            {
                one: 1,
                two: 2
            },
            {
                three: 3,
                four: 4
            }
        ],
        [
            {
                a: "a",
                b: "b"
            },
            {
                c: "c",
                d: “d”
            }
        ]
    ];
    ```

<!--- Remove items from array using splice()--->

### splice()
> remove any number of consecutive elements.

> returns a new array containing the value of the removed elements.

```javascript
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```

> can take up 3 parameters.

* first parameter : index on the array from which to begin removing elements.
* second parameter : number of elements to delete.

```javascript
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```

<!--- Add Items Using splice()--->
* third parameter : one or more elements, to *add*  them as well

```javascript
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']
```

### slice()
<!--- Copy Array Items Using slice()--->
> modifying an array, copies, or *extracts*, a given number of elements to a new array.

> leaving the array : upon untouched.

> taken only two parameters.

* first parameter : index at which to begin extraction.
* second parameter : index at which to stop extraction. (up to, not including the element at this index)
    ```javascript
    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    let todaysWeather = weatherConditions.slice(1, 3);
    // todaysWeather equals ['snow', 'sleet'];
    // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
    ```

### spread operator
> allow us to easily copy *all* of an array's elements, in order, with a simple and highly readable syntax.

```javascript
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray