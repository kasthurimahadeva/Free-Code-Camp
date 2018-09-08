// Write Concise Object Literal Declarations Using Simple Fields
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

/* ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
We can simply write x once, and it will be converted tox: x (or something equivalent) under the hood.*/

const getMousePosition = (x, y) => ({ x, y });