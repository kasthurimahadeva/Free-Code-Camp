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

// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex); 

// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

//Match Letters of the Alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); 

//Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters.
// It also works to match a range of numbers.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex); 

// Match Single Characters Not Specified
// negated character sets: create a set of characters that we do not want to match
// place a caret character (^) after the opening bracket and before the characters we do not want to match.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 

// Match Characters that Occur One or More Times
// need to match a character (or group of characters) that appears one or more times in a row. 
//  use the + character to check if that is the case
/* For example, /a+/g would find one match in "abc" and return ["a"]. 
Because of the +, it would also find a single match in "aabc" and return ["aa"].
If it were instead checking the string "abab", it would find two matches and return ["a", "a"] 
Because the a characters are not in a row - there is a b between them. */
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More Times
// The character to do this is the asterisk or star: *.
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

// Find Characters with Lazy Matching

// Default greedy:
/* string: titanic          regex: /t[a-z]*i/
        return ["titani"] */

// lazy matching
// regex: /t[a-z]*?i/
// return ["ti"]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/;
let result = text.match(myRegex);

// Find One or More Criminals in a Hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/; 
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// Match All Letters and Numbers
// The closest character class in JavaScript to match the alphabet is \w
// /\w/ = /[A-Za-z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
// opposite of the \w with \W
// This shortcut is the same as [^A-Za-z0-9_]
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// Match All Numbers
// shortcut to look for digit characters is \d
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

// Match All Non-Numbers
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;