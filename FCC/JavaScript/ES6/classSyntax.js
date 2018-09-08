// Use class Syntax to Define a Constructor Function
// In ES5,
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// In ES6,
class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');
/* Notice that the class keyword declares a new function, and a constructor was added, 
which would be invoked when new is called - to create a new object.*/