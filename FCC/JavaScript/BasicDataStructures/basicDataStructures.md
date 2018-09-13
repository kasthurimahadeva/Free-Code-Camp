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