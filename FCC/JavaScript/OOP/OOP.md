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