// Pig Latin

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
    let arr = str.split("");
    let newArr = [];
    let vowels = ["a", "e", "i", "o", "u"];
    let arr1 = arr.slice();
    for(let i = 0; i < arr.length; i++){
      if(vowels.indexOf(arr[i]) >= 0){
        break;
      }
      else{
        newArr.push(arr1.shift());
      }
    }
    if(newArr.length > 0){
      newArr.push(...["a", "y"]);
    }
  
    else{
      newArr.push(...["w", "a", "y"]);
    }
    
    arr = arr1.concat(newArr);
    str = arr.join("");
    return str;
  }
  
  translatePigLatin("consonant");