// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    // &colon;&rpar;
    var entities = [
        ["&", "amp"],
        ["<", "lt"],
        [">", "gt"],
        ['"', "quot"],
        ["'", "apos"]
    ];
  
    for (let i = 0; i < entities.length; i++) {
      str = str.replace(new RegExp(entities[i][0], 'g'), ('&' + entities[i][1] + ';'));
  
    }
      
    return str;
}
  
convertHTML("Dolce & Gabbana");