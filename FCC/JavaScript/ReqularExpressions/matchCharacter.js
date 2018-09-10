// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

//Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);