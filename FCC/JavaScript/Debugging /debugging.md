# Debugging
There are three type of errors 
1. Syntax error - Prevent a program from running

```javascript
funtion willNotWork( {
  console.log("Yuck");

// "function" keyword is misspelled and there's a missing parenthesis
```

2. Runtime error - When code fails to execute or has unexpected behaviour

```javascript
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}

// Calling loopy starts an infinite loop, which may crash your browser
```

3. Semantic error or logical error - When code does not do what it's meant to.

```javascript
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);

// Correct syntax and the program executes, but this gives the wrong answer
```