// Create Strings using Template Literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.

  // backticks (`), not quotes (' or "), to wrap the string
  // string is multi-line, both in the code and the output
  // ${variable} syntax used above is a placeholder.