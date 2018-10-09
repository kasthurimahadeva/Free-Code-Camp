# React

#### Self-Closing JSX Tags

> Any JSX element can be written with a self-closing tag, and every element must be closed.

    * must always be written as <br /> 
    * can be written as <div /> or <div></div>
    
<hr>

## React Component

> There are two ways to create a React component.

1. Use a JavaScript function : _stateless functional component_
    * React requires function name to begin with a capital letter.
    
    ```react
    // After being transpiled, the <div> will have a CSS class of 'customClass'
    const DemoComponent = function() {
      return (
        <div className='customClass' />
      );
    };
    ```
    
1. With the ES6 ```class``` syntax.
    
    ```react
    class Kitten extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <h1>Hi</h1>
        );
      }
    }
    ```
