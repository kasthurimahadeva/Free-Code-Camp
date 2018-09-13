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