# OOP
## Object
```javascript
let dog = {
  name : "Chukkuddy",
  numLegs : 4
};
```

### Dot notation
```javascript
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// This prints "Aflac" to the console
```

### Object - Method
```javascript
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs : function(){
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();
```

### Make Code More Reusable with the this Keyword
```javascript
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
```

<hr>

### Define a Constructor Function

> Constructors follow a few conventions:

* Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
* Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
* Constructors define properties and behaviors instead of returning a value as other functions might.

```javascript
function Dog(){
  this.name = "Chukkuddy";
  this.color = "Black and White";
  this.numLegs = 4;
}
```


### Use a Constructor to Create Objects
```javascript
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

let hound = new Dog();
```

```javascript
hound.color = "black";
console.log(hound.color);
// black
```


### Extend Constructors to Receive Arguments

```javascript
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Terrier", "brown");
```


### Verify an Object's Constructor with instanceof
```javascript
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(4);
myHouse instanceof House;
```


### Understand Own Properties
```javascript
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line

for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
```


### Use Prototype Properties to Reduce Duplicate Code

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");
```


### Iterate Over All Properties

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }

  else{
    prototypeProps.push(property);
  }
}
```


### Understand the Constructor Property
```javascript
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
    return true;
  }

  return false;
}
```


### Change the Prototype to a New Object

``` javascript
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs : 4,
  eat: function(){
    console.log("chicken egg fish");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};
```



### Remember to Set the Constructor Property when Changing the Prototype
```javascript
function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,     // define the constructor property
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```



###  Understand Where an Object’s Prototype Comes From
```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

Dog.prototype.isPrototypeOf(beagle);
```