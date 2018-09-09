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