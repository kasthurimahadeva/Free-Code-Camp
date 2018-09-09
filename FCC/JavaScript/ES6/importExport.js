//import and export
//import and export are non-browser features.

// Understand the Differences Between import and require

/* In the past, the function require() would be used to import the functions and 
code in external files and modules. While handy, this presents a problem: 
some files and modules are rather large, and we may only need certain code from those external resources.*/

/* ES6 gives us a very handy tool known as import. With it, 
we can choose which parts of a module or file to load into a given file, saving time and memory. */

//For example
/* Imagine that math_array_functions has about 20 functions, 
but I only need one, countItems, in my current file. 
The old require() approach would force me to bring in all 20 functions. 
With this new import syntax, I can bring in just the desired function */

import { countItems } from "math_array_functions"
// We can also import variables the same way!

"use strict";
import { capitalizeString } from "string_functions"
capitalizeString("hello!");

//Use export to Reuse a Code Block
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString }     //How to export functions.
export const foo = "bar";       //How to export variables.
export const bar = "foo";

// If we would like to compact all your export statements into one line : 
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }

//Use * to Import Everything from a File
// Suppose we have a file that you wish to import all of its contents into the current file

"use strict";
import * as myCapitalizeMethod from "capitalize_strings";

// use the dot notation to call our imported values.
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);

// Create an Export Fallback with export default
// we will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.
// we can only have one value be a default export in each module or file. 
// Additionally, we cannot use export default with var, let, or const.

"use strict";
export default function subtract(x,y) {
    return x - y;
}

