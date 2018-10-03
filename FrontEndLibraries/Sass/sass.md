# SASS

* SASS - "Syntactically Awesome StyleSheets"
* SASS is a language extension of CSS.
* Sass makes it easier for developers to simplify and maintain the style sheets for their projects.
* There are two syntaxes available for Sass:
    1. SCSS (Sassy CSS) 
    1.  indented syntax (or sometimes just "Sass")
    
## Store Data with Sass Variables
```sass
$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```
