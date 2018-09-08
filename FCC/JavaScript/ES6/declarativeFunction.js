// Write Concise Declarative Functions with ES6
// In ES5,
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};

// In ES6, remove the function keyword and colon altogether when defining functions in objects.
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};