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


## Nest CSS with Sass

> In CSS,
```css
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}

```

> In SASS,

```sass
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

## Create Reusable CSS with Mixins

> In CSS,

```css
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

> In SASS,

```sass
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}
```

> A mixin is called with the @include directive:

```sass
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```



## Use @if and @else to Add Logic To Your Styles

```sass
<style type='text/sass'>
@mixin border-stroke($val){
  @if $val == light{
    border : 1px solid black;
  }

  @else if $val == medium{
    border : 3px solid black;
  }

  @else if $val == heavy{
    border : 6px solid black;
  }

  @else {
    border : none;
  }
}
  
  
  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }  
</style>

<div id="box"></div>
```


## Use @for to Create a Sass Loop

> @for is used in two ways:

1. start through end : includes the end number.
1. start to end : excludes the end number.

```sass
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

> The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:

```sass
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```