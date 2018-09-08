//const <variable_name>
//common practice : uppercase naming and words seperated by an underscore.

const LIST = [1, 2, 3];

LIST = [5, 6, 7]; // Throws error trying to assign a const.

LIST[2] = 4;
console.log(LIST);

/*
output
(3) [1, 2, 4]

Because arrays can mutable.
*/