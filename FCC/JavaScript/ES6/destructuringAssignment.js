//Use Destructuring Assignment to Assign Variables from Objects

//ES5 codde:
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x;    // x = 3.6
var y = voxel.y;    // y = 7.4
var z = voxel.z;    // z = 6.54

//ES6 code:
"use-strict";
const { x, y, z } = voxel;  // x = 3.6, y = 7.4, z = 6.54

//If instead we want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, 
const { x : a, y : b, z : c } = voxel   // a = 3.6, b = 7.4, c = 6.54